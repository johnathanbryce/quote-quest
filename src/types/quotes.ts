export type Quoter = {
  id: string;
  name: string;
  image: string;
  isActive: boolean;
};

export type Quote = {
  id: string;
  quote: string;
  author: string;
  isReal: boolean;
  imitating?: string;
};
