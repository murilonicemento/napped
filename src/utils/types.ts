export interface FormProps {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
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

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  access_token: string;
}

export interface RegisterErrorAPI {
  error: {
    message: string;
  };
  statusCode: number;
}

export type AuthContextType = {
  user: User | null;
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
