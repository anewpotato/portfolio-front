import { ProjectsInformationType } from '@src/types/contents/projects';

type ProgressIconPropsType = Pick<ProjectsInformationType, 'progress'>;

export default function ProgressIcon({ progress }: ProgressIconPropsType) {
  let iconColor: string;
  let icon: string;

  if (progress === 0) {
    icon = 'check_circle';
    iconColor = 'text-green-400';
  } else if (progress === 1) {
    icon = 'play_circle';
    iconColor = 'text-red-400';
  } else if (progress === 2) {
    icon = 'keep';
    iconColor = 'text-yellow-400';
  }

  return (
    <span
      className={`material-symbols-rounded icon-style icon-fill-1 ${iconColor}`}
      style={{ fontSize: '1.2rem' }}
    >
      {icon}
    </span>
  );
}
