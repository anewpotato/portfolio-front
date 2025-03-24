import { useState } from 'react';
import Category from '../Skills/Category';
import ProjectSlider from './ProjectSlider';

export default function Projects() {
  const [selectedProgress, setSelectedProgress] = useState<number>(0);

  return (
    <div className="w-full flex flex-col flex-1 gap-3 ">
      <div className="text-sm text-right text-gray-500 dark:text-slate-300">
        ※ 폐쇄망 환경에서 작업한 프로젝트들의 사진은 인터넷에서 유사한 예시들로
        대체하였습니다.
      </div>
      <Category
        list={['완료', '진행중', '진행예정']}
        selectedIndex={selectedProgress}
        handleOnClick={setSelectedProgress}
      />
      <ProjectSlider selectedProgress={selectedProgress} />
    </div>
  );
}
