import Details from '@src/components/Details';
import { skillsInformation } from '@src/constant/skills';
import SkillChip from '../SkillChip';

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
