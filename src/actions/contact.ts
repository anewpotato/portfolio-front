'use server';

import { FetchResponseType } from '@src/types';

export async function submitContact(formData): Promise<FetchResponseType> {
  const targetUrl =
    'https://script.google.com/macros/s/AKfycbyJmCrNjZNLa4D0UIClh3SSAG4XBio7U912X_5sbUSwB9jL2IQm-ihWLnBwgnBLah8g/exec';

  try {
    const response = await fetch(targetUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('[Error]Occured Server Error!!');

    return { success: true, message: '성공적으로 전송되었습니다.' };
  } catch (error) {
    return {
      success: false,
      message: '전송에 실패하였습니다. 다시 시도해 주세요.',
    };
  }
}
