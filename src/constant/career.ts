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
      'React와 Next.js를 활용한 고도화 아키텍처 설계 및 구축.',
      '사내 여러 프로젝트에서 사용할 수 있는 디자인 시스템 구축.',
      '재사용 가능한 공통 컴포넌트 설계 및 개발.',
      '기존 시스템의 리팩토링을 통한 성능 및 유지보수성 개선.',
      '보안 솔루션 고도화 프로젝트 Frontend 배포 전략 수립.',
      '전사 기술 세미나를 주도해 사내 Frontend 개발 역량 강화.',
      '레거시 프로젝트 유지보수 지원.',
    ],
  },
];

export const careerFilter: string[] = ['최신순', '오래된 순'];
