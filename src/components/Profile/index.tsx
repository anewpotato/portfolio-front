import { profileInfoList } from '@src/constant/profile';
import ProfileInformation from './ProfileInformation';
import ProfilePhoto from './ProfilePhoto';
import Introduction from './Introduction';

export default function Profile() {
  return (
    <>
      <div className="basis-1/4">
        <ProfilePhoto />
        {profileInfoList.map(({ key, text, type }) => (
          <ProfileInformation
            key={key}
            src={`/image/profile/${key}.png`}
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
