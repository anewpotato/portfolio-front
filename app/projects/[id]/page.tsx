import ProjectDetail from '@src/components/Projects/ProjectDetail';
import { ProjectDetailProps } from '@src/types/contents/projects';

export default function page({ params }: ProjectDetailProps) {
  return <ProjectDetail id={params.id} />;
}
