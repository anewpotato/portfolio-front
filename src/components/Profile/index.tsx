import ProfileInformation from './ProfileInformation';
import ProfilePhoto from './ProfilePhoto';
import Introduction from './Introduction';

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

export default function Profile() {
  return (
    <>
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

      <div className="basis-3/4 py-5">
        <Introduction />
      </div>
    </>
  );
}
