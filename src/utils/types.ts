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

export interface RegisterErrorAPI {
  error: {
    message: string;
  };
  statusCode: number;
}

export interface LoginErrorAPI extends RegisterErrorAPI {}

export type AuthContextType = {
  user: User | null;
  validateToken: (url: string, token: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
};

export interface ImageProps {
  imageURL: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface LatestNewsCardProps extends ImageProps {}

export interface ReleaseCardProps {
  type: string;
  title: string;
  description: string;
}
