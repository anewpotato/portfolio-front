import { projectsInformation } from '@src/constant/project';
import { ProjectsInformationType } from '@src/types/contents/projects';
import ProgressIcon from '../ProgressIcon';

type ProjectDetailPropsType = {
  id: string;
};

export default function ProjectDetail({ id }: ProjectDetailPropsType) {
  const { title, period, skills, progress, image }: ProjectsInformationType =
    projectsInformation.find((info) => info.id === Number(id));

  return (
    <div className="h-[calc(100vh-180px)]">
      <div className="flex gap-2 items-baseline">
        <span className="text-3xl font-bold italic">{title}</span>
        <ProgressIcon progress={progress} />
        <span className="text-sm font-semibold text-gray-500">{period}</span>
      </div>
    </div>
  );
}
