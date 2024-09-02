export interface IFooter {
  footer: {
    id: number;
    slug: string;
    name: string;
    title: string;
    description: string;
    image: string;
    sections: IPropsDataPage[];
  };
}