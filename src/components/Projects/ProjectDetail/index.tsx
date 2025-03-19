import { projectsInformation } from '@src/constant/project';
import { ProjectsInformationType } from '@src/types/contents/projects';
import ProjectTitle from './ProjectTitle';
import ProjectImage from './ProjectImage';
import ProjectSkills from '../ProjectSkills';
import ProjectSection from './ProjectSection';

type ProjectDetailPropsType = {
  id: string;
};

export default function ProjectDetail({ id }: ProjectDetailPropsType) {
  const {
    title,
    period,
    skills,
    progress,
    image,
    description,
    role,
    result,
  }: ProjectsInformationType = projectsInformation.find(
    (info) => info.id === Number(id),
  );

  return (
    <div className="h-vh flex flex-col gap-6 relative">
      <ProjectTitle title={title} progress={progress} period={period} />
      <ProjectImage image={image} />
      <ProjectSkills skills={skills} />
      <div className="flex flex-col gap-8">
        <ProjectSection category="개요">{description}</ProjectSection>
        <ProjectSection category="역할">{role}</ProjectSection>
        <ProjectSection category="성과">
          {result.map(({ category, list }, index) => (
            <div key={category}>
              <span>{`${index + 1}. ${category}`}</span>
              <div className="px-4 py-6">
                {list.map((work: string) => (
                  <div key={work} className="flex mb-4">
                    <span
                      className="material-symbols-rounded text-green-500 icon-style icon-fill-1"
                      style={{ fontSize: '20px' }}
                    >
                      check_box
                    </span>
                    <span className="text-sm">{work}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ProjectSection>
      </div>
    </div>
  );
}
