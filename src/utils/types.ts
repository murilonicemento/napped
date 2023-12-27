export interface NavLinkProps {
  to: string;
  isActive: boolean;
  text: string;
}

export interface FormProps {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  access_token: string;
}

export interface RegisterDataAPI {
  user: {
    id: number;
    name: string;
    email: string;
  };
  message: string;
  statusCode: number;
}

export interface LoginDataAPI {
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    access_token: string;
  };
  message: string;
  statusCode: number;
}

export interface DeleteDataAPI {
  message: string;
  statusCode: number;
}

export interface RegisterErrorAPI {
  error: {
    message: string;
  };
  statusCode: number;
}

export interface LoginErrorAPI extends RegisterErrorAPI {}

export interface DeleteAccountErrorAPI extends RegisterErrorAPI {}

export interface ValidateTokenErrorAPI extends RegisterErrorAPI {}

export interface UpdateAccountErrorAPI extends RegisterErrorAPI {}

export interface ValidateToken {
  user: User;
  validated: boolean;
  statusCode: number;
}

export type AuthContextType = {
  user: User | null;
  validateToken: (access_token: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  deleteAccount: (id: number) => Promise<boolean>;
  updateAccount: (
    id: number,
    name: string | null,
    email: string | null,
    password: string | null
  ) => Promise<boolean>;
  signOut: () => void;
};

export interface ImageProps {
  imageURL: string | undefined;
  type: string | undefined;
  title: string | undefined;
  description?: string;
  id: string | undefined;
}

export interface LatestNewsCardProps extends ImageProps {
  id: string | undefined;
}

export interface SearchProps {
  type: string;
  articles: NewsDataIO | undefined;
}

export interface ReleaseCardProps {
  type: string;
  title: string | undefined;
  description: string | undefined;
  id: string | undefined;
}

export interface MenuItemProps {
  id: number;
  name: string;
  pathname: string;
  isButton: boolean;
  buttonColor: string | null;
}

export interface NewsDataIOResult {
  article_id: string;
  title: string;
  link: string;
  keywords: Array<string> | null;
  creator: Array<string>;
  video_url: string | null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  country: Array<string>;
  category: Array<string>;
  language: string;
}
export interface NewsDataIO {
  nextPage: string;
  results: Array<NewsDataIOResult>;
  status: string;
  totalResults: number;
}
