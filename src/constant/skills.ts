import { SkillsInformationType } from '@src/types/contents/skills';

export const skillsViewFilter: string[] = ['간략히 보기', '상세히 보기'];
export const skillsCategoryFilter: string[] = ['Frontend', 'Backend', '기타'];

export const skillsInformation: SkillsInformationType = [
  [
    {
      key: 'HTML',
      description: [
        '시맨틱 태그의 역할을 이해하고 적절히 사용 가능.',
        '태그 별 주요 속성에 대해 이해. ',
        '<meta>, <link> 등의 태그를 활용한 페이지 정보 및 설정 가능.',
      ],
    },
    {
      key: 'CSS',
      description: [
        '스타일 우선순위 및 상속 규칙에 대해 이해.',
        'Flexbox 및 Grid 레이아웃 설계 가능.',
        '반응형 디자인 및 애니메이션 구현 가능.',
      ],
    },
    {
      key: 'javascript',
      description: [
        'ES6+ 문법 및 클로저, 스코프, 호이스팅 등 JavaScript의 동작 원리 이해.',
        'JavaScript 메모리 구조 및 Garbage Collection에 대해 이해.',
        '클로저, 스코프, 호이스팅 등 JavaScript의 동작 원리 이해.',
        '비동기 처리 (Promise, async/await) 및 에러 핸들링 가능.',
      ],
    },
    {
      key: 'typescript',
      description: [
        '기본적인 타입 선언 및 인터페이스 활용 가능.',
        '유틸리티 타입 및 제네릭을 활용 가능.',
        'Javascript와의 관계성 및 동작 이해.',
        '기존 JavaScript 프로젝트의 TypeScript 전환 경험.',
      ],
    },
    {
      key: 'react',
      description: [
        '함수형 컴포넌트 및 React Hook 중심의 핵심 개념에 대한 이해.',
        '재사용 가능한 컴포넌트 설계 및 개발 경험.',
        'Context API, Redux 등 전역 상태 관리에 대해 이해.',
        '메모이제이션 및 관심사 분리를 통한 성능 최적화 경험.',
        'CRA 기반 순수 React 개발 경험.',
      ],
    },
    {
      key: 'next.js',
      description: [
        'Page router 중심의 핵심 개념에 대한 이해.',
        'SSR, SSG, CSR 차이에 대해 이해하고 활용 가능.',
        'Custom Node Server, Docker Container 등을 이용한 배포 환경 구축 경험.',
        'API Routes를 활용한 Reverse Proxy 환경 구성 경험.',
      ],
    },
    {
      key: 'redux',
      description: [
        'Reducers, Action, Store에 대해 이해.',
        'Redux Persist를 활용한 데이터 유지 설정 가능.',
        'Redux toolkit 설정 및 Slice 사용 경험.',
        '효율적인 전역 상태 관리 방법 도입 경험.',
      ],
    },
    {
      key: 'mui',
      description: [
        '다양한 컴포넌트 사용 및 커스터마이징 경험.',
        'Theme Provider를 이용한 전역 스타일링 설정.',
        '공통 컴포넌트 설계 시의 효율적 활용 경험.',
      ],
    },
    {
      key: 'tailwindcss',
      description: [
        '유틸리티 디자인에 대해 이해.',
        '프로젝트 초기 설정 및 커스텀 테마 구성 경험.',
        '공통 컴포넌트 스타일링 적용 경험.',
      ],
    },
    {
      key: 'storybook',
      description: [
        'Story에 대해 이해.',
        '프로젝트 설정 및 Convention 설정 경험.',
        'MDX를 활용한 스토리 문서화 경험.',
        '다양한 상호작용 케이스 작성 경험.',
      ],
    },
    {
      key: 'prettier',
      description: [
        'Code Formatter에 대해 이해.',
        '프로젝트 초기 설정 및 팀 컨벤션에 맞는 설정 적용.',
        '.prettierrc 파일을 이용한 세부 옵션 조정 가능.',
        'ESLint와 연동하여 일관된 코드 스타일 유지 경험.',
      ],
    },
    {
      key: 'eslint',
      description: [
        '정적 코드 분석에 대해 이해.',
        '프로젝트 초기 설정 및 규칙 정의 경험.',
        '플러그인 및 확장 설정을 통해 팀 스타일 가이드 작성.',
        'Prettier와 연동하여 코드 품질 관리 경험.',
      ],
    },
  ],
  [
    {
      key: 'spring',
      description: [
        'DI, OOP 등 기본적인 개념에 대해 이해.',
        'Legacy Project 유지 보수 경험.',
      ],
    },
    {
      key: 'springboot',
      description: [
        'Spring과의 차이점에 대한 이해.',
        'Annotation 기반 설정 가능.',
        '간단한 REST API 개발 경험.',
      ],
    },
    {
      key: 'postgreSQL',
      description: [
        '기본적인 CRUD 쿼리 가능.',
        '검색을 통해 원하는 데이터를 조회할 수 있음.',
        'DDL, DML에 대해 이해.',
      ],
    },
  ],
  [
    {
      key: 'docker',
      description: [
        'Container, image에 대해 이해.',
        '원하는 이미지를 활용해 컨테이너 생성 및 관리 가능.',
        'CI/CD 구성 시 Dockerfile 활용 경험.',
      ],
    },
    {
      key: 'npm',
      description: [
        'npm에 대해 이해.',
        '사내 저장소와 연동하여 패키징 가능.',
        '디자인 시스템 관리 경험.',
      ],
    },
    {
      key: 'git',
      description: [
        '핵심 기능에 대해 이해.',
        'git message convention 준수.',
        '협업 시 활용 경험.',
        'Git Lab Runner를 활용한 CI/CD 구성 경험.',
      ],
    },
    {
      key: 'jira',
      description: [
        '핵심 기능에 대해 이해.',
        'Ticket 생성 및 관리 경험.',
        '이슈 및 업무 관리 가능.',
        '협업 시 활용 경험.',
      ],
    },
    {
      key: 'confluence',
      description: [
        '스페이스에 대한 이해.',
        '업무에 필요한 문서화 경험.',
        '협업 시 활용 경험.',
      ],
    },
    {
      key: 'slack',
      description: ['협업 시 활용 경험.', '유관 부서와 유연한 의사소통 가능.'],
    },
    {
      key: 'rest api',
      description: [
        '핵심 내용에 대해 이해.',
        'API Spec을 확인해 문제 해결 가능.',
        'Backend와 협업 시 주의 사항 인지.',
        '간단한 API 개발 경험.',
      ],
    },
  ],
];
