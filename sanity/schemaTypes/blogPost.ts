export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: {
    name: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  categories: {
    _id: string;
    title: string;
  }[];
  publishedAt: string;
  body: any[]; // or PortableTextBlock[] if you want strict typing
  excerpt?: string;
}
