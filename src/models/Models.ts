export type Section = {
  title: string;
  subtitle: string;
  description: {
    raw: any;
    html: string;
    markdown: string;
    text: string;
  };
  order: number;
  sectionId: string;
  subsections: Subsection[];
};

export type Subsection = {
  title: string;
  subtitle: string;
  description: string;
  order: number;
  subsectionId: string;
};

export type Review = {
  name: string;
  location: string;
  text: string;
  date: string;
  image: string;
  stars: number;
};

export type SoMeLink = {
  title: string;
  link: string;
  icon: string;
  someId: string;
};
