import Details from '@src/components/Details';
import SkillChip from '../SkillChip';

type SkillsInformationType = { key: string; description: string[] }[][];

const skillsInformation: SkillsInformationType = [
  [
    {
      key: 'HTML',
      description: ['aa'],
    },
    {
      key: 'CSS',
      description: [],
    },
    {
      key: 'javascript',
      description: [],
    },
    {
      key: 'typescript',
      description: [],
    },
    {
      key: 'react',
      description: [],
    },
    {
      key: 'next.js',
      description: [],
    },
    {
      key: 'redux',
      description: [],
    },
    {
      key: 'mui',
      description: [],
    },
    {
      key: 'tailwindcss',
      description: [],
    },
    {
      key: 'storybook',
      description: [],
    },
    {
      key: 'prettier',
      description: [],
    },
    {
      key: 'eslint',
      description: [],
    },
  ],
  [
    { key: 'Spring', description: [] },
    { key: 'Springboot', description: [] },
    { key: 'postgreSQL', description: [] },
  ],
  [
    {
      key: 'docker',
      description: [],
    },
    {
      key: 'git',
      description: [],
    },
    {
      key: 'jira',
      description: [],
    },
    {
      key: 'confluence',
      description: [],
    },
    {
      key: 'slack',
      description: [],
    },
    {
      key: 'REST API',
      description: [],
    },
  ],
];

type SkillsDetailPropsType = {
  selectedView: number;
  selectedSkill: number;
};

export default function SkillsDetail({
  selectedView,
  selectedSkill,
}: SkillsDetailPropsType) {
  return skillsInformation[selectedSkill]?.map(({ key, description }) =>
    selectedView === 0 ? (
      <SkillChip key={key} label={key} />
    ) : (
      <Details key={key} src={`/image/skills/${key}.svg`} label={key}>
        {description.map((desc, index) => (
          <div key={`${key}-${desc}`}>{`${index + 1}. ${desc}`}</div>
        ))}
      </Details>
    ),
  );
}
