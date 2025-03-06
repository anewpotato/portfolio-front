import Carrer from '@components/Career';
import Contact from '@components/Contact';
import Etc from '@components/Etc';
import Profile from '@components/Profile';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import AnimationSection from '@components/AnimationSection';

const sections: {
  id: string;
  content: React.ReactElement;
}[] = [
  { id: 'profile', content: <Profile /> },
  { id: 'skills', content: <Skills /> },
  { id: 'career', content: <Carrer /> },
  { id: 'projects', content: <Projects /> },
  { id: 'etc', content: <Etc /> },
  { id: 'contact', content: <Contact /> },
];

export default function Page() {
  return sections.map(({ id, content }) => (
    <AnimationSection key={id} id={id}>
      {content}
    </AnimationSection>
  ));
}
