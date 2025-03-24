import { IntroductionType, ProfileInfoType } from '@src/types/contents/profile';

export const introduction: IntroductionType = {
  title: 'A developer who never hesitates to take on new challenges',
  body: `안녕하세요. 4년 차 Frontend 개발자 유승종입니다.

ES6+ 기반의 JavaScript, React 17, Next.js 12를 중심으로 다양한 프로젝트를 수행했으며, Frontend 개발 역량을 넓히기 위해 React 18+, Next.js 13+, Typescript 등 추가적인 기술에 대해 학습 중입니다.

시스템의 문제점을 개선하거나 해결하기 위해 새로운 기술을 적극적으로 학습 및 적용해보고 비교, 분석하여 도입을 제안하거나 효율적인 유지보수가 가능하면서 UX 측면에서 더 좋은 성능을 낼 수 있는 로직에 대해 고민하며 작업합니다. 또한, 웹 개발 전반의 흐름에 대한 이해를 바탕으로 동료들과 유연하게 커뮤니케이션하며 문제를 해결해 나갈 수 있습니다.

이와 같은 역량을 통해 Client-Server 구조의 웹 플랫폼 고도화 프로젝트에서 성과를 인정받아 조기진급을 달성한 경험이 있고, 
디자인 시스템 프로젝트에서 기존 공통 컴포넌트의 효율적인 유지보수 및 시각적 테스트를 위해 NPM Packaging과 Storybook 도입을 제안하고 Javascript의 빈번한 Runtime error를 개선하기 위한 Typescript와 더불어 Material UI 라이브러리의 디자인 유연성 한계를 개선하기 위한 TailwindCSS로의 전환을 주도한 경험이 있습니다.

프로젝트의 Frontend 개발자로서 단순히 담당 업무를 처리하는 데 급급한 것이 아닌, 스스로 자부심을 가질 수 있는 결과물을 만들어낼 수 있도록 주도적으로 참여하고자 노력합니다.
`,
};

export const profileInfoList: ProfileInfoType[] = [
  { key: 'terminal', text: '유승종, Yu SeungJong', type: 'text' },
  { key: 'phone', text: '010-4692-7597', type: 'text' },
  { key: 'email', text: 'fbtmdwhd33@naver.com', type: 'text' },
  { key: 'github', text: 'https://github.com/anewpotato', type: 'link' },
  { key: 'laptop', text: 'https://fbtmdwhd33.tistory.com', type: 'link' },
];
