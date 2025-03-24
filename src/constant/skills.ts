import { SkillsInformationType } from '@src/types/contents/skills';

export const skillsViewFilter: string[] = ['간략히 보기', '상세히 보기'];
export const skillsCategoryFilter: string[] = ['Frontend', 'Backend', '기타'];

export const skillsInformation: SkillsInformationType = [
  [
    {
      key: 'HTML',
      description: [
        'semantic tag를 이해하고 사용.',
        '태그 별 주요 속성에 대해 이해. ',
        'React Component 설계 시 활용 가능.',
      ],
    },
    {
      key: 'CSS',
      description: [
        '기본적인 스타일 적용 가능.',
        '스타일 적용 우선 순위에 대해 이해.',
        '검색을 통한 스타일 문제 해결 가능.',
      ],
    },
    {
      key: 'javascript',
      description: [
        'ES6+ 문법 및 핵심 개념에 대해 이해.',
        '메모리 구조에 대해 이해.',
        'DOM 조작 및 이벤트 핸들링.',
        '비동기 처리에 대해 이해.',
      ],
    },
    {
      key: 'typescript',
      description: [
        '기본적인 타입 선언에 대해 이해 및 활용',
        '타입 추론 및 유틸리티 타입 활용 가능.',
        'Javascript와의 관계성 및 동작 이해.',
        '기존 Javascript 전환 경험.',
      ],
    },
    {
      key: 'react',
      description: [
        '함수형 컴포넌트 중심의 핵심 개념에 대해 이해.',
        '컴포넌트 설계 및 성능 개선 가능.',
        'Context API, Redux 등 전역 상태 관리에 대해 이해.',
        '다양한 라이브러리 적용 경험.',
      ],
    },
    {
      key: 'next.js',
      description: [
        'Page router 중심의 핵심 개념에 대한 이해.',
        'SSR, SSG, CSR 차이에 대한 이해.',
        '환경 변수 관리 및 배포 경험.',
        'reverse proxy 환경 구성 경험.',
      ],
    },
    {
      key: 'redux',
      description: [
        'reducers, action, store에 대해 이해.',
        'Redux persist와 함께 프로젝트 설정 경험.',
        'Redux toolkit의 slice 사용 경험.',
        '효율적인 전역 상태 관리 방법 도입.',
      ],
    },
    {
      key: 'mui',
      description: [
        '기본 컴포넌트 종류 및 사용 방법에 대해 이해.',
        '공식 문서를 통한 활용 가능.',
        '공통 컴포넌트 설계 시 사용 경험.',
      ],
    },
    {
      key: 'tailwindcss',
      description: [
        '유틸리티 디자인에 대한 이해.',
        '프로젝트 설정 경험.',
        '공통 컴포넌트 전환 경험',
      ],
    },
    {
      key: 'storybook',
      description: [
        '프로젝트 설정 경험.',
        'story 작성에 대해 이해',
        '문서화 및 상호작용 케이스 작성 가능.',
      ],
    },
    {
      key: 'prettier',
      description: ['프로젝트 설정 경험', '공식 문서를 통해 원하는 설정 가능.'],
    },
    {
      key: 'eslint',
      description: ['프로젝트 설정 경험', '공식 문서를 통해 원하는 설정 가능.'],
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
        '검색을 통해 원하는 데이터를 뽑을 수 있음.',
        'DDL, DML에 대해 이해.',
      ],
    },
  ],
  [
    {
      key: 'docker',
      description: [
        'Container, image에 대해 이해.',
        '원하는 이미지를 활용해 컨테이너로 활용 가능.',
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
      description: ['협업 시 활용 경험.'],
    },
    {
      key: 'rest api',
      description: [
        '핵심 내용에 대해 이해.',
        'API Spec을 확인해 문제 해결 가능.',
        'Backend와 협업 시 주의 사항 숙지.',
        '간단한 API 개발 경험.',
      ],
    },
  ],
];
