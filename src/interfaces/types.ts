export interface InputProps {
  type: string;
  name: string;
  value: string;
  set: (args: any) => string;
  placeholder: string;
  errorMessage: string;
}
