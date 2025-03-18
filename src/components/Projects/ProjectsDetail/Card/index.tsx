import SkillChip from '@src/components/Skills/SkillChip';
import { ProjectsInformationType } from '@src/types/contents/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
}: ProjectsInformationType & { position: string; windowWidth: number }) {
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
    <motion.div
      className="flex flex-col h-full w-1/2 gap-4 p-4 lg:absolute shadow-xl border-2 rounded-lg bg-white"
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
        {title}
        <span
          className={`material-symbols-rounded icon-style icon-fill-1 ${iconColor}`}
          style={{ fontSize: '1.2rem' }}
        >
          {icon}
        </span>
      </div>
      <Link
        className="h-full"
        href={`/image/projects/${image}.png`}
        target="_blank"
      >
        <div className="relative h-full border-2 flex-1 shadow-xl">
          <Image
            priority
            alt=""
            src={`/image/projects/${image}.png`}
            fill
            sizes="(max-width: 500px) 100vw"
          />
        </div>
      </Link>

      {windowWidth >= 768 && (
        <div className="flex flex-wrap">
          {skills.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
