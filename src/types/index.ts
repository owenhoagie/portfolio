export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}