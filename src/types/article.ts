type Author = {
  name: string;
  image: string;
};

export type Article = {
  id: string;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  content: React.ReactNode
};
