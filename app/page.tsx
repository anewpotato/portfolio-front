'use client';

import Carrer from '@components/Career';
import Contact from '@components/Contact';
import Etc from '@components/Etc';
import Profile from '@components/Profile';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import AnimationSection from '@components/AnimationSection';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { ReactElement } from 'react';

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
  const sections = useSelector((state: RootState) => state.navigation.list);
  return sections.map(({ id }) => (
    <AnimationSection key={id} id={id}>
      {map[id]}
    </AnimationSection>
  ));
}
