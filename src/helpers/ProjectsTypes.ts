export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  images?: Image[]; // relative path to image
  highlights?: string[];
};

type Image = {
  src: string;
  alt: string;
  caption: string;
  name: string;
};

export type Projects = {
  [key: string]: Project[];
};

export type Tech = Project['tech'][];
