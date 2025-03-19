import { useState } from 'react';
import Category from '../Skills/Category';
import ProjectSlider from './ProjectSlider';

export default function Projects() {
  const [selectedProgress, setSelectedProgress] = useState<number>(0);

  return (
    <div className="w-full flex flex-col flex-1 gap-3">
      <Category
        list={['완료', '진행중', '진행예정']}
        selectedIndex={selectedProgress}
        handleOnClick={setSelectedProgress}
      />
      <ProjectSlider selectedProgress={selectedProgress} />
    </div>
  );
}
