export type ProjectsInformationType = {
  id: number;
  title: string;
  period: string;
  skills: string[];
  progress: 0 | 1 | 2;
  image: string;
};

export type ProjectDetailProps = {
  params: { id: string };
};
