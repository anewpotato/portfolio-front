import { useState } from 'react';
import { skillsCategoryFilter, skillsViewFilter } from '@src/constant/skills';
import Category from './Category';
import SkillsDetail from './SkillsDetail';

export default function Skills() {
  const [selectedView, setSelectedView] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="text-sm text-right text-gray-500 dark:text-slate-300">
        ※ 상세히 보기에 기록된 내용은 개괄적으로 작성하였습니다.
      </div>
      <Category
        list={skillsViewFilter}
        selectedIndex={selectedView}
        handleOnClick={setSelectedView}
      />
      <Category
        list={skillsCategoryFilter}
        selectedIndex={selectedSkill}
        handleOnClick={setSelectedSkill}
      />
      <div
        className={`border-2 rounded-lg p-9 ${selectedView === 0 ? 'flex flex-wrap gap-3' : 'grid xl:grid-cols-2 gap-y-10'}`}
      >
        <SkillsDetail
          selectedView={selectedView}
          selectedSkill={selectedSkill}
        />
      </div>
    </div>
  );
}
