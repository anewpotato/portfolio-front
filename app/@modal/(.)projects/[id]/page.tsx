import Modal from '@src/components/Modal';
import ProjectDetail from '@src/components/Projects/ProjectDetail';
import { ProjectDetailProps } from '@src/types/contents/projects';

export default function InterceptTest({ params }: ProjectDetailProps) {
  return (
    <Modal>
      <ProjectDetail id={params.id} />
    </Modal>
  );
}
