import { ProjectsInformationType } from '@src/types/contents/projects';
import ProgressIcon from '../../ProgressIcon';

export default function ProjectTitle({
  title,
  progress,
  period,
}: Pick<ProjectsInformationType, 'title' | 'progress' | 'period'>) {
  return (
    <div className="flex gap-2 items-baseline sm:flex-col lg:flex-row">
      <span className="sm:text-md md:text-2xl xl:text-3xl font-bold italic">
        {title}
      </span>
      <ProgressIcon progress={progress} />
      <span className="text-sm font-semibold text-gray-500">{period}</span>
    </div>
  );
}
