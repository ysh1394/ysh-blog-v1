export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  description: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  publishedAt?: string | null;
  slug: {
    current: string;
  };
  comments?: Comment[];
  categories?: [object];
  body?: [object];
}

export interface Category {
  _id: string;
  title: string;
  description: string;
}

export interface Comment {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'comment';
  _updatedAt: string;
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
}
