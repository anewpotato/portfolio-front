import { pacificoFont } from '@src/constant/fonts';
import ProfileInformation from './ProfileInformation';
import ProfilePhoto from './ProfilePhoto';
import Tooltip from '../Tooltip';

const profileInfoList: {
  key: string;
  text: string;
  type: 'text' | 'link';
}[] = [
  { key: 'terminal', text: '유승종, Yu SeungJong', type: 'text' },
  { key: 'phone', text: '010-4692-7597', type: 'text' },
  { key: 'email', text: 'fbtmdwhd33@naver.com', type: 'text' },
  { key: 'github', text: 'https://github.com/anewpotato', type: 'link' },
  { key: 'laptop', text: 'https://fbtmdwhd33.tistory.com', type: 'link' },
];

const introduction = {
  title: 'A developer who never hesitates to take on new challenges',
  body: `안녕하세요. 4년 차 Front end 개발자 유승종입니다.

처음에는 Java 개발자로 커리어를 시작했으나, 웹 플랫폼 고도화 프로젝트를 계기로 Front end 개발에 집중하게 되었습니다.
해당 프로젝트에서 신기술을 활용한 아키텍처 설계 및 개발을 주도하며 성과를 인정받아 조기 진급을 달성했으며, 이후 JavaScript와 Material-UI를 기반으로 React 컴포넌트 모듈을 개발하고 이를 활용하여 여러 프로젝트에 Front end 개발자로서 참여하였습니다.

또한, 기존 컴포넌트의 문제점을 개선하기 위해 Storybook을 도입하여 시각적 테스트 및 문서화 환경을 개선하고, Atomic 디자인 패턴을 적용해 TypeScript와 Tailwind CSS로의 전환을 진행했으며, NPM 패키징을 활용한 효율적인 컴포넌트 관리 방식을 제안하여 컴포넌트의 재사용성과 유지보수성을 높이는 데 기여한 경험이 있습니다.

Front end 직무 경험 뿐만 아니라, Spring Boot, Spring Framework 등과 같은 Back end 기술에 대한 이해를 바탕으로 한 REST API 개발 경험과 Docker, GitLab Runner를 활용한 CI/CD 인프라 구축 경험도 보유하고 있습니다.

이러한 경험을 바탕으로 단순한 업무로써 기능 개발을 넘어, 주도적으로 기존 시스템의 문제점을 파악하고 새로운 기술을 활용해 개선할 수 있으며 웹 개발 전반에 대한 깊은 이해를 바탕으로 유연한 커뮤니케이션을 통한 협업을 통해 효율적이고 유연한 문제해결이 가능하다는 강점을 보유한 개발자로 성장했다고 생각합니다. 이러한 역량을 발휘하여 업무에 자부심을 가지고 개발에 참여할 수 있는 회사와 함께 더욱 성장할 수 있는 기회를 찾고 있습니다.`,
};

export default function Profile() {
  return (
    <div className="flex w-full h-full p-24 gap-10">
      <div className="basis-1/4">
        <ProfilePhoto />
        {profileInfoList.map(({ key, text, type }) => (
          <ProfileInformation
            key={key}
            src={`/image/${key}.png`}
            alt={`profile_${key}_img`}
            text={text}
            type={type}
          />
        ))}
      </div>

      <div className="basis-3/4">
        <Tooltip text="새로운 도전을 망설이지 않는 개발자">
          <span className={`text-3xl text-[#f17f7f] ${pacificoFont.className}`}>
            {introduction.title}
          </span>
        </Tooltip>
        <div className="px-3 mt-10 whitespace-pre-line text-wrap">
          {introduction.body}
        </div>
      </div>
    </div>
  );
}
