import SkillChip from '@src/components/Skills/SkillChip';
import { ProjectsInformationType } from '@src/types/contents/projects';

export default function ProjectSkills({
  skills,
}: Pick<ProjectsInformationType, 'skills'>) {
  return (
    <div className="flex flex-wrap">
      {skills.map((skill) => (
        <SkillChip key={skill} label={skill} />
      ))}
    </div>
  );
}
