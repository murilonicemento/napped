import { useForm } from "react-hook-form";
import { InputProps } from "../interfaces/types";

export function Input({
  type,
  name,
  value,
  set,
  placeholder,
  errorMessage,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <input
        {...register("name", { required: true })}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => set(event.target.value)}
        className="w-full bg-user bg-left bg-no-repeat bg-dark-30 pl-10 pt-2 pb-2 border border-solid rounded-md border-dark-30 text-white placeholder:text-white outline-none"
      />
      ;
      {errors.name?.type === "required" && (
        <span className="w:full border border-solid border-brand text-error">
          {errorMessage}
        </span>
      )}
    </>
  );
}
