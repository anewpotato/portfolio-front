import { ProjectsInformationType } from '@src/types/contents/projects';

export const projectsInformation: ProjectsInformationType[] = [
  {
    id: 0,
    title: '디자인 시스템',
    period: '2024.06 ~ 2024.12',
    skills: [
      'HTML',
      'CSS',
      'javascript',
      'react',
      'typescript',
      'tailwindcss',
      'google material icon',
      'storybook',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'design_system.png',
    description: `고도화 웹 플랫폼에서 사용하던 Javascript, Material-UI 기반의 공통 컴포넌트에서 Runtime Error가 빈번하게 발생하고, 디자인 단계에서 제약사항이 있는 문제점을 파악하였습니다. 이를 개선하기 위해 Typescript, TailwindCSS로의 전환과 동시에 효율적인 유지보수를 위해 Atomic Design Pattern을 바탕으로 사내 Nexus 저장소에서 NPM Package로 관리될 수 있도록 진행한 프로젝트입니다.`,
    role: 'CRA(Create React App)를 활용한 개발 환경 및 사내 Nexus 저장소 NPM Package 배포 가이드를 작성하고, Atomic Design Pattern을 바탕으로 컴포넌트의 설계 및 개발 업무와 동시에 Storybook을 활용한 컴포넌트 가이드 작성.',
    result: [
      {
        category: '컴포넌트 모듈 전환 및 최적화',
        list: [
          `Atomic 디자인 패턴을 기반으로 기존 컴포넌트의 관심사를 분리하고 세분화하여 재사용성 및 유지보수성 향상을 고려한 설계에 참여. (ex. as-is: 주요 컴포넌트 약 10개, to-be: atom 컴포넌트 약 20개로 세분화)`,
          `약 20개의 컴포넌트를 Typescript로 작성하여 컴포넌트에 전달되는 Props Type의 체크로개발 단계에서 에러를 확인할 수 있게 하고, Tailwind CSS로 적용으로 컴포넌트 경량화를 통해 초기 렌더링 성능 향상에 기여.`,
          `기존 무분별한 컴포넌트 확장으로 인한 유지보수 비용 증가 문제를 해결하기 위해 제한적인 Props 관리 및 컴포넌트 확장 방식을 제안하여 도입.`,
        ],
      },
      {
        category: ' 개발 환경 구축 및 문서화',
        list: [
          `CRA(Create React App), Tailwind CSS, Typescript, ESLint, Prettier 등 초기 개발 환경을 구축을 주도하여 컴포넌트 전환 및 신규 개발 생산성 향상에 기여.
`,
          `사내 Nexus 저장소에 NPM 패키징 및 배포 환경을 구축하여 버전 관리 및 컴포넌트 이력 추적 가능하도록 개선.
`,
          `프로젝트 빌드 및 패키지 설치 가이드를 문서화하여 동료 개발자들이 손쉽게 접근하고 활용할 수 있도록 지원.
`,
        ],
      },
    ],
    company: { text: '(주)한싹', color: '#00652a' },
  },
  {
    id: 1,
    title: '보안 솔루션 고도화',
    period: '2023.06 ~ 2025.01',
    skills: [
      'HTML',
      'CSS',
      'javascript',
      'react',
      'next.js',
      'redux',
      'mui',
      'docker',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'solution.png',
    description: `고도화 웹 플랫폼 내 Javascript, Material-UI 기반 공통 컴포넌트의 Runtime 안정성,
디자인 유연성 개선 및 버전 관리를 위해 Atomic 디자인 패턴 기반으로 Typescript, Tailwind
CSS로 전환 후 NPM 패키지로 관리할 수 있도록 개선한 프로젝트.`,
    role: 'CRA(Create React App)를 활용한 개발 환경 및 사내 Nexus 저장소 NPM Package 배포 가이드를 작성하고, Atomic Design Pattern을 바탕으로 컴포넌트의 설계 및 개발 업무 수행.',

    result: [
      {
        category: '컴포넌트 모듈 전환 및 최적화',
        list: [
          `- Atomic 디자인 패턴을 기반으로 기존 컴포넌트의 관심사를 분리하고 세분화하여 재사용성 및
유지보수성 향상을 고려한 설계에 참여. (ex. as-is: 주요 컴포넌트 약 10개, to-be: atom 컴
포넌트 약 20개로 세분화)
`,
          `약 20개의 컴포넌트를 Typescript로 작성하여 컴포넌트에 전달되는 Props Type의 체크로
개발 단계에서 에러를 확인할 수 있게 하고, Tailwind CSS로 적용으로 컴포넌트 경량화를 통해
초기 렌더링 성능 향상에 기여.`,
          `- 기존 무분별한 컴포넌트 확장으로 인한 유지보수 비용 증가 문제를 해결하기 위해 제한적인
Props 관리 및 컴포넌트 확장 방식을 제안하여 도입.
`,
        ],
      },
      {
        category: ' 개발 환경 구축 및 문서화',
        list: [
          `CRA(Create React App), Tailwind CSS, Typescript, ESLint, Prettier 등 초기 개발 환
경을 구축을 주도하여 컴포넌트 전환 및 신규 개발 생산성 향상에 기여.
`,
          `사내 Nexus 저장소에 NPM 패키징 및 배포 환경을 구축하여 버전 관리 및 컴포넌트 이력 추
적 가능하도록 개선.
`,
          `프로젝트 빌드 및 패키지 설치 가이드를 문서화하여 동료 개발자들이 손쉽게 접근하고 활용할
수 있도록 지원.
`,
        ],
      },
    ],
    company: { text: '(주)한싹', color: '#00652a' },
  },
  {
    id: 2,
    title: '웹 플랫폼 고도화',
    period: '2022.01 ~ 2023.06',
    skills: [
      'CSS',
      'javascript',
      'react',
      'next.js',
      'redux',
      'mui',
      'storybook',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'platform.png',
    description: `고도화 웹 플랫폼 내 Javascript, Material-UI 기반 공통 컴포넌트의 Runtime 안정성,
디자인 유연성 개선 및 버전 관리를 위해 Atomic 디자인 패턴 기반으로 Typescript, Tailwind
CSS로 전환 후 NPM 패키지로 관리할 수 있도록 개선한 프로젝트.`,
    role: 'CRA(Create React App)를 활용한 개발 환경 및 사내 Nexus 저장소 NPM Package 배포 가이드를 작성하고, Atomic Design Pattern을 바탕으로 컴포넌트의 설계 및 개발 업무 수행.',
    result: [
      {
        category: '컴포넌트 모듈 전환 및 최적화',
        list: [
          `Atomic 디자인 패턴을 기반으로 기존 컴포넌트의 관심사를 분리하고 세분화하여 재사용성 및 유지보수성 향상을 고려한 설계에 참여. (ex. as-is: 주요 컴포넌트 약 10개, to-be: atom 컴포넌트 약 20개로 세분화)`,
          `약 20개의 컴포넌트를 Typescript로 작성하여 컴포넌트에 전달되는 Props Type의 체크로
개발 단계에서 에러를 확인할 수 있게 하고, Tailwind CSS로 적용으로 컴포넌트 경량화를 통해
초기 렌더링 성능 향상에 기여.`,
          `- 기존 무분별한 컴포넌트 확장으로 인한 유지보수 비용 증가 문제를 해결하기 위해 제한적인
Props 관리 및 컴포넌트 확장 방식을 제안하여 도입.
`,
        ],
      },
      {
        category: ' 개발 환경 구축 및 문서화',
        list: [
          `CRA(Create React App), Tailwind CSS, Typescript, ESLint, Prettier 등 초기 개발 환
경을 구축을 주도하여 컴포넌트 전환 및 신규 개발 생산성 향상에 기여.
`,
          `사내 Nexus 저장소에 NPM 패키징 및 배포 환경을 구축하여 버전 관리 및 컴포넌트 이력 추
적 가능하도록 개선.
`,
          `프로젝트 빌드 및 패키지 설치 가이드를 문서화하여 동료 개발자들이 손쉽게 접근하고 활용할
수 있도록 지원.
`,
        ],
      },
    ],
    company: { text: '(주)한싹', color: '#00652a' },
  },
  {
    id: 3,
    title: '보안 솔루션 프로토타입',
    period: '2022.04 ~ 2024.06',
    skills: [
      'CSS',
      'javascript',
      'react',
      'next.js',
      'redux',
      'mui',
      'storybook',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'prototype.svg',
    description: `고도화 웹 플랫폼 내 Javascript, Material-UI 기반 공통 컴포넌트의 Runtime 안정성,
디자인 유연성 개선 및 버전 관리를 위해 Atomic 디자인 패턴 기반으로 Typescript, Tailwind
CSS로 전환 후 NPM 패키지로 관리할 수 있도록 개선한 프로젝트.`,
    role: 'CRA(Create React App)를 활용한 개발 환경 및 사내 Nexus 저장소 NPM Package 배포 가이드를 작성하고, Atomic Design Pattern을 바탕으로 컴포넌트의 설계 및 개발 업무 수행.',
    result: [
      {
        category: '컴포넌트 모듈 전환 및 최적화',
        list: [
          `- Atomic 디자인 패턴을 기반으로 기존 컴포넌트의 관심사를 분리하고 세분화하여 재사용성 및
유지보수성 향상을 고려한 설계에 참여. (ex. as-is: 주요 컴포넌트 약 10개, to-be: atom 컴
포넌트 약 20개로 세분화)
`,
          `약 20개의 컴포넌트를 Typescript로 작성하여 컴포넌트에 전달되는 Props Type의 체크로
개발 단계에서 에러를 확인할 수 있게 하고, Tailwind CSS로 적용으로 컴포넌트 경량화를 통해
초기 렌더링 성능 향상에 기여.`,
          `- 기존 무분별한 컴포넌트 확장으로 인한 유지보수 비용 증가 문제를 해결하기 위해 제한적인
Props 관리 및 컴포넌트 확장 방식을 제안하여 도입.
`,
        ],
      },
      {
        category: ' 개발 환경 구축 및 문서화',
        list: [
          `CRA(Create React App), Tailwind CSS, Typescript, ESLint, Prettier 등 초기 개발 환
경을 구축을 주도하여 컴포넌트 전환 및 신규 개발 생산성 향상에 기여.
`,
          `사내 Nexus 저장소에 NPM 패키징 및 배포 환경을 구축하여 버전 관리 및 컴포넌트 이력 추
적 가능하도록 개선.
`,
          `프로젝트 빌드 및 패키지 설치 가이드를 문서화하여 동료 개발자들이 손쉽게 접근하고 활용할
수 있도록 지원.
`,
        ],
      },
    ],
    company: { text: '(주)한싹', color: '#00652a' },
  },

  {
    id: 4,
    title: '개인 포트폴리오',
    period: '2025.03 ~ 진행중',
    skills: [
      'HTML',
      'CSS',
      'javascript',
      'typescript',
      'react',
      'next.js',
      'redux',
      'tailwindcss',
      'google material icon',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 1,
    image: 'portfolio.png',
    description: `고도화 웹 플랫폼 내 Javascript, Material-UI 기반 공통 컴포넌트의 Runtime 안정성,
디자인 유연성 개선 및 버전 관리를 위해 Atomic 디자인 패턴 기반으로 Typescript, Tailwind
CSS로 전환 후 NPM 패키지로 관리할 수 있도록 개선한 프로젝트.`,
    role: 'CRA(Create React App)를 활용한 개발 환경 및 사내 Nexus 저장소 NPM Package 배포 가이드를 작성하고, Atomic Design Pattern을 바탕으로 컴포넌트의 설계 및 개발 업무 수행.',
    result: [
      {
        category: '컴포넌트 모듈 전환 및 최적화',
        list: [
          `- Atomic 디자인 패턴을 기반으로 기존 컴포넌트의 관심사를 분리하고 세분화하여 재사용성 및
유지보수성 향상을 고려한 설계에 참여. (ex. as-is: 주요 컴포넌트 약 10개, to-be: atom 컴
포넌트 약 20개로 세분화)
`,
          `약 20개의 컴포넌트를 Typescript로 작성하여 컴포넌트에 전달되는 Props Type의 체크로
개발 단계에서 에러를 확인할 수 있게 하고, Tailwind CSS로 적용으로 컴포넌트 경량화를 통해
초기 렌더링 성능 향상에 기여.`,
          `- 기존 무분별한 컴포넌트 확장으로 인한 유지보수 비용 증가 문제를 해결하기 위해 제한적인
Props 관리 및 컴포넌트 확장 방식을 제안하여 도입.
`,
        ],
      },
      {
        category: ' 개발 환경 구축 및 문서화',
        list: [
          `CRA(Create React App), Tailwind CSS, Typescript, ESLint, Prettier 등 초기 개발 환
경을 구축을 주도하여 컴포넌트 전환 및 신규 개발 생산성 향상에 기여.
`,
          `사내 Nexus 저장소에 NPM 패키징 및 배포 환경을 구축하여 버전 관리 및 컴포넌트 이력 추
적 가능하도록 개선.
`,
          `프로젝트 빌드 및 패키지 설치 가이드를 문서화하여 동료 개발자들이 손쉽게 접근하고 활용할
수 있도록 지원.
`,
        ],
      },
    ],
    company: { text: '개인 프로젝트', color: '#f87171' },
  },
];
