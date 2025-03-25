import { ProjectsInformationType } from '@src/types/contents/projects';

export const projectsInformation: ProjectsInformationType[] = [
  {
    id: 0,
    title: '디자인 시스템 구축',
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
      'npm',
      'eslint',
      'prettier',
      'git',
      'jira',
      'confluence',
      'slack',
    ],
    progress: 0,
    image: 'design_system.png',
    description:
      '고도화 웹 플랫폼에서 사용하던 Javascript, Material-UI 기반의 공통 컴포넌트에서 Runtime Error가 빈번하게 발생하고, 디자인 단계에서 제약사항이 있는 문제점을 파악하였습니다. 이를 개선하기 위해 Typescript, TailwindCSS로의 전환과 동시에 효율적인 유지보수를 위해 Atomic Design Pattern을 바탕으로 사내 Nexus 저장소에서 NPM Package에 의해 버전 관리가 가능한 사내 디자인 시스템 구축을 목표로 진행한 프로젝트입니다.',
    role: 'CRA(Create React App)를 활용해 개발 환경을 구축하고, 사내 Nexus 저장소 NPM Package 배포 가이드를 작성하였습니다. 또한, Atomic Design Pattern을 바탕으로 컴포넌트의 설계 및 개발과 더불어 Storybook을 활용한 컴포넌트 Story를 작성했습니다.',
    result: [
      {
        category: '공통 컴포넌트 설계 및 개발.',
        list: [
          'Atomic Design Pattern (Atom, Molecules, Organisms, Pages)을 기준으로 컴포넌트를 세분화하고, 기존 컴포넌트의 UI와 Logic 관심사를 분리하여 재사용성 및 유지보수성 개선.',
          'TypeScript로 약 20개의 컴포넌트를 개발하고 Props의 명시적 타입 선언을 통해 런타임 에러 감소 및 코드 품질 개선.',
          'Material UI 의존성을 제거하고 Tailwind CSS를 도입해 디자인 유연성 강화 및 컴포넌트 크기 감소로 성능 최적화.',
        ],
      },
      {
        category: ' 개발 환경 구축 및 문서화',
        list: [
          'CRA (Create React App), ESLint, Prettier를 활용하여 프로젝트 초기 개발 환경을 구축하고, 코드 품질을 위한 규칙 정의.',
          'Storybook 프로젝트 설정 후, 공통 컴포넌트를 대상으로 Story를 작성하여 컴포넌트 문서화.',
          '사내 NPM 저장소를 대상으로 Npm packaging 배포 환경 구축 및 버전 관리 전략 수립.',
          '프로젝트 빌드, 배포 및 설치 가이드 문서 작성 및 관리.',
        ],
      },
    ],
    company: { text: '(주)한싹', color: '#00652a' },
  },
  {
    id: 1,
    title: '보안 솔루션 관리자 웹 고도화',
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
      'rest api',
      'jira',
      'confluence',
      'slack',
    ],
    progress: 0,
    image: 'solution.png',
    description:
      '기존에 Spring Framework와 JSP로 구축되어 판매되던 망 연계, 패스워드, CDS 등 여러 노후화된 보안 솔루션에 대한 고도화 필요성이 대두되면서, 핵심 기능의 고도화와 동시에 보안 솔루션을 관리하는 어드민 사이트도 고도화하게 되었습니다. 이 과정에서 앞서 진행했던 공통 웹 플랫폼 프로젝트의 결과물을 활용하게 되었고, 이에 호환되도록 각 솔루션의 어드민 사이트에 포함되는 다양한 기능의 개발을 목표로 진행한 프로젝트입니다.',
    role: '고도화 공통 웹 플랫폼 기반 개발 환경 설정과 담당 솔루션에 필요한 기능(정책 관리, 솔루션 환경 설정, 자료전송 현황 등)을 개발하고, Frontend 전반적인 이슈사항 대응 및 배포 관리 역할을 담당했습니다. 또한, 타 솔루션 개발팀 대상으로 Frontend 기술 세미나를 여러 차례 진행하며 기술 지원과 함께 여러 공통 컴포넌트의 개발 및 성능 개선을 병행했습니다.',
    result: [
      {
        category: '컴포넌트 개발 및 성능 개선',
        list: [
          '비즈니스 요구사항에 따른 주요 기능 (정책 관리, 솔루션 환경 설정, 자료 전송 서버 관리 등) 개발.',
          '외부 라이브러리의(Am Chart 등) 복잡한 옵션을 추상화한 Wrapping 컴포넌트를 제공하여 개발 생산성 향상.',
          '타 솔루션 팀과 커뮤니케이션을 통해 공통 컴포넌트의 요구 사항을 파악하고 반영하여 재사용 가능한 컴포넌트(MiniTable, Label 등) 개발.',
          '반복 사용되는 중복 코드를 추상화된 유틸리티 모듈로 리팩토링하여 코드 중복을 약 60% 감소 및 유지보수성과 가독성 개선.',
          'React Hooks 기반의 중복 로직을 Custom Hook으로 추상화해 UI와 로직을 분리하고, 전체 컴포넌트의 약 80%에 적용하여 결합도를 낮추고 재사용성을 강화.',
          '대용량 데이터 테이블에서 스크롤 시 지연 현상이 발생하는 문제를 확인하고, 가상화 라이브러리 React Virtuoso를 도입하여 성능 개선.',
          '대용량 파일 다운로드 시 속도 저하 및 메모리 점유 문제를 확인하고, Web Stream API의 Writable Stream 로직과 Progress UI를 활용하여 다운로드 속도 및 UX 개선.',
          '비동기 이벤트 로직 내에 ReactDOM.unstable_batchedUpdates를 적용하여 렌더링 성능 개선.',
          '관심사가 다른 Data Fetching 로직을 분리하고, Promise.all을 활용해 병렬 요청을 수행하여 API Response Time을 약 30% 단축.',
        ],
      },
      {
        category: '이슈 대응 및 배포관리',
        list: [
          'Custom Node Server를 구축하고 Frontend HTTPS 프로토콜 적용.',
          'Nomad Scheduler 환경에서 동적 환경 변수 주입 문제를 해결하기 위해 Next.js API Routes를 활용하여 Proxy 환경 구성.',
          'Dockerfile 및 GitLab Runner를 활용하여 CI/CD 자동화 환경 구축.',
          '폐쇄망 및 인터넷망 별 배포 가이드 문서 작성 및 관리.',
          'React, Next.js, 고도화 공통 웹 플랫폼 관련하여 전사 기술 세미나 3회 진행 및 각종 기술 문의 대응.',
        ],
      },
    ],
    company: { text: '(주)한싹', color: '#00652a' },
  },

  {
    id: 2,
    title: '보안 솔루션 프로토타입 구축',
    period: '2023.06 ~ 2024.06',
    skills: [
      'CSS',
      'javascript',
      'react',
      'next.js',
      'redux',
      'mui',
      'docker',
      'storybook',
      'eslint',
      'prettier',
      'git',
      'rest api',
    ],
    progress: 0,
    image: 'prototype.svg',
    description:
      '보안 솔루션 관리자 웹 고도화와 마찬가지로 공통 웹 플랫폼을 기반으로 진행하지만, 기존에 존재하던 솔루션을 대상으로 한 것이 아닌 새로운 형태의 사업을 수주하기 위해 프로토타입의 구축이 필요했습니다. 이에 따라 공통 웹 플랫폼 프로젝트의 Frontend를 주도했던 경험을 바탕으로 담당 개발자로 선정되어 타 부서의 동료 개발자와 협업을 통해 진행했던 프로젝트입니다.',
    role: '프로토타입 구축 프로젝트의 Frontend 개발자로서 비즈니스 요구 사항에 맞춰 기능을 개발하고, 배포 관리까지 담당했습니다.',
    result: [
      {
        category: '클라우드 SaaS 보안 솔루션 관리 웹 사이트',
        list: [
          '공통 웹 플랫폼 기본 환경 설정.',
          'Publisher 요구 사항에 따라 기존 플랫폼의 UI 규칙을 유지하면서 Ant Design으로 디자인 시스템을 마이그레이션하고 UI 완성도 향상.',
          'Backend 개발자와 API 명세 협의 및 연동을 통해 기능 요구 사항을 충족.',
          '비즈니스 요구사항에 따라 로그인, 사용자 관리, 서비스 신청 등 핵심 기능 개발.',
          'makefile 기반의 Docker container 배포 자동화를 도입해 배포 프로세스를 간소화하고 운영 효율성 개선.',
        ],
      },
      {
        category: 'KT AI Mail 보안 솔루션 연동 관리 웹 사이트',
        list: [
          '공통 웹 플랫폼 기본 환경 설정.',
          '고객사 Publisher와 협의하여 UI 구성.',
          'Microsoft Graph API의 복잡한 인증 구조를 이해하고 OAuth 기반 로그인 및 구독 서비스 연동.',
          '비즈니스 요구사항에 따라 회원 목록, 이메일 목록, 파일 전송 히스토리 등 핵심 기능 개발.',
        ],
      },
    ],
    company: { text: '(주)한싹', color: '#00652a' },
  },
  {
    id: 3,
    title: '공통 웹 플랫폼 구축',
    period: '2022.01 ~ 2023.06',
    skills: [
      'HTML',
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
      'rest api',
    ],
    progress: 0,
    image: 'platform.svg',
    description:
      '망 연계, 패스워드, CDS 등 기존 보안 솔루션의 어드민 사이트들이 가지고 있는 공통 기능은 비슷하지만, 상세 기술 스택 및 버전의 차이로 인한 유지 보수의 어려움이 있었습니다. 이에 따라 공통 기능을 추상화하여 정리하고 신기술을 활용한 고도화된 공통 웹 플랫폼을 구축한 뒤, 버전 관리를 통일하는 것을 목표로 진행한 프로젝트입니다. 당시, 신입으로 담당 업무가 명확하지 않았었기에 본 프로젝트에 주도적으로 참여하게 되었고 그 과정에서 많은 걸 배울 수 있었으며, 조기진급을 달성했을 정도로 만족스러운 결과물을 만든 프로젝트입니다.',
    role: '고도화를 위한 기술 스택 선정 및 프로젝트 아키텍처를 설계하고, 추상화된 공통 기능에 대해 마이그레이션을 진행했습니다. 또한, 세션 관리 시스템를 구성하거나 파라미터 암호화 로직을 구현하고, 여러 재사용 가능한 공통 컴포넌트 및 모듈을 개발하는 등 플랫폼 전반적으로 필수적인 기능 개발 및 배포 관리를 담당했습니다.',
    result: [
      {
        category: '아키텍처 설계 및 기술 스택 설정',
        list: [
          'Frontend Framework(React/Vue/Angular)의 비교 분석을 통해 커뮤니티 규모 및 자유로운 라이브러리 선택의 이점 등의 이유로 React 선정.',
          '일관된 규칙 및 모듈을 지원받을 수 있으며, 추가적인 프로젝트의 확장성을 고려해 Next.js 도입.',
          'B2B BM의 특성을 고려하여 기존 SSR 방식에서 CSR 구조를 채택하여 UX 개선.',
          '방대한 커뮤니티와 단방향 데이터 흐름, 불변성 유지 등 큰 프로젝트에 적합한 Redux 채택.',
          'EsLint 및 Prettier를 사용해 Airbnb style guide 기준의 일관된 코드 컨벤션 수립.',
          'Next.js API Routes의 Proxy 구조를 도입하여 서버 간 API 통신 시 CORS 오류 방지.',
          'Material UI 디자인 시스템을 도입하여 일관된 UI 구성.',
        ],
      },
      {
        category: '컴포넌트, 기능 개발 및 성능 개선',
        list: [
          '비즈니스 요구사항에 따른 공통 기능(사용자 관리, 권한 관리, 메뉴 관리 등) 개발 및 마이그레이션.',
          '약 30개의 재사용 가능한 공통 컴포넌트(Table, Modal, Input 등) 개발 및 전체 프로젝트 90% 사용.',
          '약 10개의 재사용 가능한 CustomHook(useInput, useAccess) 개발 및 전체 프로젝트 50% 사용.',
          '기존 유틸리티 모듈 마이그레이션 및 추가 유틸리티 모듈 개발',
          'Axios를 활용하여 응답 및 에러에 대한 처리가 가능한 공통 API 통신 모듈 구현.',
          'JWT 기반 서버 인증 구조에서 Next Auth를 활용한 Client 세션 관리 시스템 개발.',
          '메뉴 접근 및 API 요청 제한을 통해 보안을 강화하기 위한 권한 기반 접근 제어 로직 개발.',
          'node-forge 라이브러리를 활용하여 RSA 및 AES-128 암호화 방식을 적용한 파라미터 암호화 기능 개발.',
          'Bundle Analyzer를 활용해 번들의 비정상적인 크기를 확인하고, import 최적화를 통해 번들 크기 40% 감소 및 로딩 시간 20% 단축.',
          'useCallback 및 useMemo를 활용해 규모가 커진 공통 컴포넌트의 렌더링 성능 개선.',
        ],
      },
      {
        category: '기타',
        list: [
          '프로젝트 결과물에 대한 전사 기술 세미나를 통해 성과를 인정받아 조기 진급 달성.',
          '타 솔루션 팀의 공통 웹 플랫폼 도입에 따른 보안 인증 및 제품화 관련 기술 지원.',
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
