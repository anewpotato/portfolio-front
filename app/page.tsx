'use client';

import Carrer from '@components/Career';
import Contact from '@components/Contact';
import Etc from '@components/Etc';
import Profile from '@components/Profile';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import AnimationSection from '@components/AnimationSection';
import { ReactElement } from 'react';
import useRedux from '@src/hooks/useRedux';
import { NavigationSliceType } from '@src/store/navigation/navigationSlice';

const map: {
  [key: string]: ReactElement;
} = {
  Profile: <Profile />,
  Skills: <Skills />,
  Career: <Carrer />,
  Projects: <Projects />,
  Etc: <Etc />,
  Contact: <Contact />,
};

export default function Page() {
  const [{ list: sections }] = useRedux<NavigationSliceType>('navigation');

  return sections.map(({ id }) => (
    <AnimationSection key={id} id={id}>
      <div className="flex w-full h-full sm:px-4 sm:py-24 md:p-24 lg:flex-row sm:flex-col">
        {map[id]}
      </div>
    </AnimationSection>
  ));
}
