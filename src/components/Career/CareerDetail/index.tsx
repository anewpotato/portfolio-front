import Details from '@src/components/Details';

type CareerInformationType = {
  key: string;
  name: string;
  info: string;
  period: string;
  team: string;
  rank: string; // 직급
  position: string; // 직책
  role: string;
  result: string[];
};

const careerInformation: CareerInformationType[] = [
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

type CareerDetailPropsType = {
  isOrderNew: boolean;
};

export default function CareerDetail({ isOrderNew }: CareerDetailPropsType) {
  return careerInformation.map(
    ({ key, name, info, period, team, rank, position, role, result }) => (
      <Details
        key={key}
        src={`/image/career/${key}.svg`}
        label={name}
        width={170}
      >
        <div className="text-sm flex flex-col">
          <div className="mb-6">{info}</div>
          <div>근무 기간 : {period}</div>
          <div>소속 : {team}</div>
          <div>직급 : {rank}</div>
          <div>직책 : {position}</div>
          <div className="mb-4">역할: {role} </div>
          <div className="flex flex-col">
            담당 업무
            <div className="indent-2 font-semibold">
              {result.map((text, index) => (
                <div key={text}>{`${index + 1}. ${text}`}</div>
              ))}
            </div>
          </div>
        </div>
      </Details>
    ),
  );
}
