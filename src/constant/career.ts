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
      'Frontend 전반적인 개발 환경 설계 및 구축.',
      '재사용 가능한 공통 컴포넌트 설계 및 개발.',
      'UI 구성, 성능 최적화 및 기능 개발.',
      'Publisher 및 Backend Developer와 협업하여 프로토타입 프로젝트 Frontend 개발 담당.',
      'Legacy Project 유지 보수.',
    ],
  },
];

export const careerFilter: string[] = ['최신순', '오래된 순'];
