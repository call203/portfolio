export type Link = {
  title: string;
  link: string;
};

export type Job = {
  title: string;
  detail?: string[];
};

export interface TitleProps {
  title: string;
  about?: string;
  subtitle: string;
  date: string;
  jobs: Job[];
  links?: Link[];
}
