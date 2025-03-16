import { useState } from 'react';
import Image from 'next/image';
import Category from './Category';

export default function Skills() {
  const [selectedView, setSelectedView] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  const handleViewOnClick = (index: number) => {
    setSelectedView(index);
  };

  const handleSkillOnClick = (index: number) => {
    setSelectedSkill(index);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <Category
        list={['간략히 보기', '상세히 보기']}
        selectedIndex={selectedView}
        handleOnClick={handleViewOnClick}
      />
      <Category
        list={['Frontend', 'Backend', '기타']}
        selectedIndex={selectedSkill}
        handleOnClick={handleSkillOnClick}
      />

      <div className="border-2 rounded-lg p-9  ">
        <span className="w-fit py-1.5 justify-between items-center flex gap-3 border-2 rounded-lg bg-[#00000080] text-white font-semibold text-sm">
          <Image
            alt=""
            className="ml-3"
            src="/image/react.png"
            width={20}
            height={20}
            style={{ height: 'auto' }}
          />
          <span className="mr-3">React</span>
        </span>
      </div>
    </div>
  );
}
