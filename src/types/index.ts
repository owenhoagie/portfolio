export interface Project {
  id: number;
  title: string;
  description: string;
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