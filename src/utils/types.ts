export interface FormProps {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface DataAPI {
  user: {
    id: number;
    name: string;
    email: string;
  };
  message: string;
  statusCode: number;
}

export interface ErrorAPI {
  error: {
    message: string;
  };
  statusCode: number;
}

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
