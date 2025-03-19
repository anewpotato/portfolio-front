import Tooltip from '@src/components/Tooltip';
import { pacificoFont } from '@src/constant/fonts';
import { introduction } from '@src/constant/profile';

export default function Introduction() {
  return (
    <>
      <Tooltip text="새로운 도전을 망설이지 않는 개발자">
        <span className={`text-3xl text-[#f17f7f] ${pacificoFont.className}`}>
          {introduction.title}
        </span>
      </Tooltip>
      <div className="p-5 mt-10 whitespace-pre-line text-wrap">
        {introduction.body}
      </div>
    </>
  );
}
