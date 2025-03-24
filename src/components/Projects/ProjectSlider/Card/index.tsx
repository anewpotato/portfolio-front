import { ProjectsInformationType } from '@src/types/contents/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProgressIcon from '../../ProgressIcon';
import ProjectSkills from '../../ProjectSkills';

const AnimationVariants = {
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 2,
    rotateY: 0,
  },
  next: {
    x: 200,
    scale: 0.8,
    opacity: 0.5,
    zIndex: 1,
    rotateY: -15,
  },
  prev: {
    x: -200,
    scale: 0.8,
    opacity: 0.5,
    zIndex: 1,
    rotateY: 15,
  },
  hidden: { opacity: 0 },
};

export default function Card({
  id,
  progress,
  position,
  windowWidth,
  title,
  skills,
  image,
  company,
}: Omit<
  ProjectsInformationType,
  'period' | 'description' | 'role' | 'result'
> & {
  position: string;
  windowWidth: number;
}) {
  return (
    <motion.div
      className="flex flex-col h-full w-1/2 gap-4 p-4 lg:absolute shadow-xl border-2 rounded-lg bg-white dark:bg-slate-800"
      initial="hidden"
      animate={position}
      exit="hidden"
      variants={AnimationVariants}
      transition={
        windowWidth <= 1024
          ? { duration: 0 }
          : { duration: 0.5, ease: 'easeInOut' }
      }
    >
      <div className="sm:text-lg xl:text-3xl font-bold">
        <Link
          className="hover:text-sky-400"
          href={`/projects/${id}`}
          prefetch={false}
          scroll={false}
        >
          {title}
        </Link>
        <ProgressIcon progress={progress} />
      </div>
      <Link
        className="h-full"
        href={`/image/projects/${image}`}
        target="_blank"
      >
        <div className="relative h-full border-2 flex-1 shadow-xl dark:bg-white">
          <Image
            priority
            alt=""
            src={`/image/projects/${image}`}
            fill
            sizes="(max-width: 500px) 100vw"
          />
        </div>
      </Link>
      <div
        className="w-fit px-2 py-1 border text-white rounded-md text-sm"
        style={{ background: company.color }}
      >
        {company.text.toUpperCase()}
      </div>
      {windowWidth >= 768 && <ProjectSkills skills={skills} />}
    </motion.div>
  );
}
