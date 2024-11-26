export type Link = {
  title: string;
  link: string;
};

export type Detail = {
  title: string;
  moreDetail?: string[];
};
export type Job = {
  title: string;
  detail?: Detail[];
};

export interface TitleProps {
  title: string;
  about?: string;
  subtitle: string;
  date: string;
  jobs?: Job[];
  links?: Link[];
  skills?: string[];
}

export interface ViewRefProps {
  viewRef?: React.RefObject<HTMLDivElement>;
}
