import { ProjectsInformationType } from '@src/types/contents/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectImage({
  image,
}: Pick<ProjectsInformationType, 'image'>) {
  return (
    <Link href={`/image/projects/${image}`} target="_blank">
      <div className="relative w-full min-h-96 border-2 border-black/50 dark:bg-white">
        <Image
          priority
          alt=""
          src={`/image/projects/${image}`}
          fill
          sizes="(max-width: 500px) 100vw"
        />
      </div>
    </Link>
  );
}
