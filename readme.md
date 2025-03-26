## Yu SeungJong Portfolio - Frontend

## [방문 링크](https://yuseungjong-portfolio.vercel.app/)

## 1. 프로젝트 소개

#### 개인 포트폴리오 프로젝트로 개인 커리어 관리를 위해 작업하기 시작한 개인 프로젝트입니다.

단일 페이지로 구성하여 불필요한 페이지 이동 없이 저라는 사람이 Frontend 개발자로서 가지고 있는 역량을 보여줄 수 있도록 구성하였으며, **Profile, Skills, Career, Projects, Etc, Contact** 항목이 존재합니다. 개발 과정에서 개인적으로 공부해보고 싶었던 기술들을 최대한 적용해보고자 합니다.

[구성](https://fbtmdwhd33.tistory.com/265), [기획](https://fbtmdwhd33.tistory.com/266)은 간단하게 작성해보았으며, [화면 설계 및 디자인](https://fbtmdwhd33.tistory.com/267)은 Figma를 이용해서 디자인했습니다. 배포는 Next.js 프로젝트로 구성했기 때문에 간단하고 빠르게 배포할 수 있도록 Vercel을 활용했습니다.

현재는 특별한 기능은 없고, 정보의 정리에 초점을 맞춰둔 상태입니다. 향후 여러 기능을 추가할 예정입니다.

## 2. 작업 기간

### 2025. 03. 04 ~ 2025. 03. 26

## 3. 주요 기술

- ES6+ Javascript, Typescript
- React 18, Next.js 14, Redux toolkit
- TailwindCSS
- ESLint, Prettier
- 기타 라이브러리: framer-motion, Google Material Icons 등

## 4. 기능

1. DarkMode 및 반응형 레이아웃 구성.
2. Google Spread Sheet를 활용한 메일 발송 기능.

- 향후 추가 기능
  1. 각 항목 별 데이터 CRUD가 가능하도록 추가 필요.
  2. 접근 권한 추가 필요.

## 5. 문제 해결

1. Google Material Icons CDN 추가 문제.

   - Next.js 12버전에서는 \_document.jsx에 커스텀 폰트를 문제없이 추가할 수 있었지만, App Router 기반 14버전에서는 RootLayout에서 추가할 경우 에러 발생.
   - MetaData 추가 시 아래와 같이 추가. 단, **IconDescriptor**를 확장해서 **precedence** 옵션을 추가하여 우선 순위를 높여 즉시 로딩할 수 있도록 최적화.

   ```
   export interface CustomIconDescriptorType extends IconDescriptor {
       precedence?: string;
   }

   const icon: CustomIconDescriptorType = {
       rel: 'stylesheet',
       url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block',
       precedence: 'default',
   };

   export const metadata: Metadata = {
       title: 'Yu SeungJong Portfolio',
       description: '유승종 포트폴리오 프론트엔드 프로젝트',
       icons: {
           other: icon,
       },
   };
   ```

2. Google Material Icons 새로 고침 시 FOTI 문제.

   - 기존 CDN 로드 시 Display swap을 줄 경우, 해당 아이콘 명에 해당하는 텍스트가 나타났다 사라지는 문제 발생.
   - Display block으로 변경하여 최초에 해당 아이콘 부분은 렌더링하지 않도록 변경하여 UX 개선.

3. 별도 메일 전송 서버를 두지 않고 Contact 이메일 전송 기능 구현.

   - 해당 기능을 구현하기 위해서 자료 서치를 통해 Google Spread Sheet의 Apps Script를 활용하는 방법을 발견.
   - 내용을 간단히 분석해보면, 사용자가 작성한 내용을 Spread Sheet에 저장하고, 컬럼의 내용을 추출하여 Google 계정을 활용하여 설정한 이메일 주소로 발송하는 것.

   ```
   /******************************************************************************
   * This tutorial is based on the work of Martin Hawksey twitter.com/mhawksey  *
   * But has been simplified and cleaned up to make it more beginner friendly   *
   * All credit still goes to Martin and any issues/complaints/questions to me. *
   ******************************************************************************/

   // if you want to store your email server-side (hidden), uncomment the next line
   var TO_ADDRESS = "fbtmdwhd33@naver.com";

   // spit out all the keys/values from the form in HTML for email
   // uses an array of keys if provided or the object to determine field order
   function formatMailBody(obj, order) {
   var result = "";
   if (!order) {
       order = Object.keys(obj);
   }

   // loop over all keys in the ordered form data
   for (var idx in order) {
       var key = order[idx];
       result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
       // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value,
       // and append it to the `result` string created at the start.
   }
   return result; // once the looping is done, `result` will be one long string to put in the email body
   }

   // sanitize content from the user - trust no one
   // ref: https://developers.google.com/apps-script/reference/html/html-output#appendUntrusted(String)
   function sanitizeInput(rawInput) {
   var placeholder = HtmlService.createHtmlOutput(" ");
   placeholder.appendUntrusted(rawInput);

   return placeholder.getContent();
   }

   function doPost(e) {

   try {
       Logger.log(e); // the Google Script version of console.log see: Class Logger
       record_data(e);

       // shorter name for form data
       var mailData = e.parameters;

       // names and order of form elements (if set)
       var orderParameter = e.parameters.formDataNameOrder;
       var dataOrder;
       if (orderParameter) {
       dataOrder = JSON.parse(orderParameter);
       }

       // determine recepient of the email
       // if you have your email uncommented above, it uses that `TO_ADDRESS`
       // otherwise, it defaults to the email provided by the form's data attribute
       var sendEmailTo = (typeof TO_ADDRESS !== "undefined") ? TO_ADDRESS : mailData.formGoogleSendEmail;

       // send email if to address is set
       if (sendEmailTo) {
       MailApp.sendEmail({
           to: String(sendEmailTo),
           subject: "[Portfolio contact] 메일 도착",
           // replyTo: String(mailData.email), // This is optional and reliant on your form actually collecting a field named `email`
           htmlBody: formatMailBody(mailData, dataOrder)
       });
       }

       return ContentService    // return json success results
           .createTextOutput(
               JSON.stringify({"result":"success",
                               "data": JSON.stringify(e.parameters) }))
           .setMimeType(ContentService.MimeType.JSON);
   } catch(error) { // if error return this
       Logger.log(error);
       return ContentService
           .createTextOutput(JSON.stringify({"result":"error", "error": error}))
           .setMimeType(ContentService.MimeType.JSON);
   }
   }


   /**
   * record_data inserts the data received from the html form submission
   * e is the data received from the POST
   */
   function record_data(e) {
   var lock = LockService.getDocumentLock();
   lock.waitLock(30000); // hold off up to 30 sec to avoid concurrent writing

   try {
       Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it

       // select the 'responses' sheet by default
       var doc = SpreadsheetApp.getActiveSpreadsheet();
       var sheetName = e.parameters.formGoogleSheetName || "responses";
       var sheet = doc.getSheetByName(sheetName);

       var oldHeader = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
       var newHeader = oldHeader.slice();
       var fieldsFromForm = getDataColumns(e.parameters);
       var row = [new Date()]; // first element in the row should always be a timestamp

       // loop through the header columns
       for (var i = 1; i < oldHeader.length; i++) { // start at 1 to avoid Timestamp column
       var field = oldHeader[i];
       var output = getFieldFromData(field, e.parameters);
       row.push(output);

       // mark as stored by removing from form fields
       var formIndex = fieldsFromForm.indexOf(field);
       if (formIndex > -1) {
           fieldsFromForm.splice(formIndex, 1);
       }
       }

       // set any new fields in our form
       for (var i = 0; i < fieldsFromForm.length; i++) {
       var field = fieldsFromForm[i];
       var output = getFieldFromData(field, e.parameters);
       row.push(output);
       newHeader.push(field);
       }

       // more efficient to set values as [][] array than individually
       var nextRow = sheet.getLastRow() + 1; // get next row
       sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

       // update header row with any new data
       if (newHeader.length > oldHeader.length) {
       sheet.getRange(1, 1, 1, newHeader.length).setValues([newHeader]);
       }
   }
   catch(error) {
       Logger.log(error);
   }
   finally {
       lock.releaseLock();
       return;
   }

   }

   function getDataColumns(data) {
   return Object.keys(data).filter(function(column) {
       return !(column === 'formDataNameOrder' || column === 'formGoogleSheetName' || column === 'formGoogleSendEmail' || column === 'honeypot');
   });
   }

   function getFieldFromData(field, data) {
   var values = data[field] || '';
   var output = values.join ? values.join(', ') : values;
   return output;
   }
   ```
