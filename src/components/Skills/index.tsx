import { useState } from 'react';
import Category from './Category';
import SkillChip from './SkillChip';

type SkillsInformationType = { key: string; description: string }[][];

const skillsInformation: SkillsInformationType = [
  [
    {
      key: 'HTML',
      description: '~~~',
    },
    {
      key: 'CSS',
      description: '~~~',
    },
    {
      key: 'javascript',
      description: '~~~',
    },
    {
      key: 'typescript',
      description: '~~~',
    },
    {
      key: 'react',
      description: '~~~',
    },
    {
      key: 'next.js',
      description: '~~~',
    },
    {
      key: 'redux',
      description: '~~~',
    },
    {
      key: 'mui',
      description: '~~~',
    },
    {
      key: 'tailwindcss',
      description: '~~~',
    },
    {
      key: 'storybook',
      description: '~~~',
    },
  ],
  [
    { key: 'Spring', description: 'aa' },
    { key: 'Springboot', description: 'aa' },
    { key: 'postgreSQL', description: 'aa' },
  ],
  [
    {
      key: 'docker',
      description: '~~~',
    },
    {
      key: 'git',
      description: '~~~',
    },
    {
      key: 'jira',
      description: '~~~',
    },
    {
      key: 'confluence',
      description: '~~~',
    },
    {
      key: 'slack',
      description: '~~~',
    },
    {
      key: 'REST API',
      description: '~~~',
    },
  ],
];

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
      <div className="border-2 rounded-lg p-9 flex flex-wrap gap-3">
        {skillsInformation[selectedSkill]?.map(({ key, description }) => (
          <SkillChip key={key} label={key} />
        ))}
      </div>
    </div>
  );
}
