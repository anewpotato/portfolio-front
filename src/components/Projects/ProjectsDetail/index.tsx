import useWindowWidth from '@src/hooks/useWindowWidth';
import { AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { ProjectsInformationType } from '@src/types/contents/projects';
import Card from './Card';

const projectsInformation: ProjectsInformationType[] = [
  {
    id: 0,
    title: 'Hanssak 디자인 시스템',
    skills: [
      'HTML',
      'CSS',
      'javascript',
      'react',
      'typescript',
      'tailwindcss',
      'google material icon',
      'storybook',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'design_system',
  },
  {
    id: 1,
    title: '보안 솔루션 고도화',
    skills: [
      'HTML',
      'CSS',
      'javascript',
      'react',
      'next.js',
      'redux',
      'mui',
      'docker',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'design_system',
  },
  {
    id: 2,
    title: '웹 플랫폼 고도화',
    skills: [
      'CSS',
      'javascript',
      'react',
      'next.js',
      'redux',
      'mui',
      'storybook',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'design_system',
  },
  {
    id: 3,
    title: '보안 솔루션 프로토타입 구축',
    skills: [
      'CSS',
      'javascript',
      'react',
      'next.js',
      'redux',
      'mui',
      'storybook',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 0,
    image: 'design_system',
  },

  {
    id: 4,
    title: '개인 포트폴리오',
    skills: [
      'HTML',
      'CSS',
      'javascript',
      'typescript',
      'react',
      'next.js',
      'redux',
      'tailwindcss',
      'google material icon',
      'eslint',
      'prettier',
      'git',
    ],
    progress: 1,
    image: 'portfolio',
  },
];

type ArrowButtonPropsType = {
  children: string;
  windowWidth: number;
  onClick: () => void;
  className: string;
};

function ArrowButton({
  children,
  windowWidth,
  onClick,
  className,
}: ArrowButtonPropsType) {
  return (
    <button
      type="button"
      className={`lg:absolute material-symbols-rounded icon-style icon-fill-1 ${className}`}
      style={{ fontSize: windowWidth <= 1024 ? '3rem' : '5rem' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

type ProjectsDetailPropsType = {
  selectedProgress: number;
};

export default function ProjectsDetail({
  selectedProgress,
}: ProjectsDetailPropsType) {
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    setSelectedProject(0);
  }, [selectedProgress]);

  const filterProjects = projectsInformation.filter(
    ({ progress }) => progress === selectedProgress,
  );
  const handleOnNextClick = () =>
    setSelectedProject((prev) => (prev + 1) % filterProjects.length);

  const handleOnPrevClick = () =>
    setSelectedProject(
      (prev) => (prev - 1 + filterProjects.length) % filterProjects.length,
    );

  const getCardPosition = useCallback(
    (index: number) => {
      if (windowWidth < 1024) {
        if (index === selectedProject) return 'center';
        return 'hidden';
      }

      if (index === selectedProject) return 'center';
      if (index === (selectedProject + 1) % filterProjects.length)
        return 'next';
      if (
        index ===
        (selectedProject - 1 + filterProjects.length) % filterProjects.length
      )
        return 'prev';
      return 'hidden';
    },
    [filterProjects.length, selectedProject, windowWidth],
  );

  return (
    <div className="py-6 w-full h-full flex flex-col border-2 rounded-lg">
      <div className="lg:relative w-full h-full flex justify-center items-center">
        {filterProjects.length === 0 ? (
          <div className="font-bold italic">
            프로젝트 정보가 존재하지 않습니다.
          </div>
        ) : (
          <>
            <ArrowButton
              className="left-0"
              windowWidth={windowWidth}
              onClick={handleOnPrevClick}
            >
              arrow_back_2
            </ArrowButton>
            <AnimatePresence>
              {projectsInformation
                .filter(({ progress }) => progress === selectedProgress)
                .map(({ id, title, skills, progress, image }, index) => {
                  const position = getCardPosition(index);
                  if (position === 'hidden') return null;

                  return (
                    <Card
                      key={id}
                      id={id}
                      position={position}
                      title={title}
                      skills={skills}
                      windowWidth={windowWidth}
                      progress={progress}
                      image={image}
                    />
                  );
                })}
            </AnimatePresence>
            <ArrowButton
              className="right-0"
              windowWidth={windowWidth}
              onClick={handleOnNextClick}
            >
              play_arrow
            </ArrowButton>
          </>
        )}
      </div>
    </div>
  );
}
