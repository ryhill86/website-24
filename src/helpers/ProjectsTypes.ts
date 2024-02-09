export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  images?: string[];
};

export type Projects = {
  [key: string]: Project[];
};

export type TechType = Project['tech'][];
