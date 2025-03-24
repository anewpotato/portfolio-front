import useWindowWidth from '@src/hooks/useWindowWidth';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { projectsInformation } from '@src/constant/project';
import Card from './Card';

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

type ProjectSliderPropsType = {
  selectedProgress: number;
};

export default function ProjectSlider({
  selectedProgress,
}: ProjectSliderPropsType) {
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
          <motion.div
            className="font-bold italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            프로젝트 정보가 존재하지 않습니다.
          </motion.div>
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
                .map(
                  ({ id, title, skills, progress, image, company }, index) => {
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
                        company={company}
                      />
                    );
                  },
                )}
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
