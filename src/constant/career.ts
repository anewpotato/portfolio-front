import { CareerInformationType } from '@src/types/contents/career';

export const careerInformation: CareerInformationType[] = [
  {
    key: 'hanssak',
    name: '(주)한싹',
    info: '기업을 대상으로 망연계, 패스워드, 전자 팩스 등 보안 솔루션을 제공하는 기업.',
    period: '2021.04.01 ~ 2025.03.03',
    team: '웹 개발 부, 웹 개발 1팀',
    rank: '전임 연구원 (프로)',
    position: '팀원',
    role: 'Frontend Developer',
    result: [
      '보안 솔루션 관리자 웹 플랫폼 고도화.',
      '재사용 가능한 공통 UI 컴포넌트 설계 및 개발.',
      '보안 솔루션 고도화 프로젝트 참여.',
      '신기술을 도입을 통한 Frontend 성능 최적화 담당.',
      'CI/CD 인프라 및 프로젝트 개발 환경 구축.',
      '신규 프로젝트 프로토타입 개발 전담.',
    ],
  },
];

export const careerFilter: string[] = ['최신순', '오래된 순'];
