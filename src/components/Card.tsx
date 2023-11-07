import { Link } from "react-router-dom";
import { CardProps } from "../utils/types";

export function Card({ imageURL, title, subtitle, description }: CardProps) {
  return (
    <div className="w-full border border-solid rounded border-dark-30 pb-8">
      <img src={imageURL} alt="Image" className="" />
      <div className="w-10/12 m-auto mt-6">
        <h2 className="text-dark-blue uppercase">{title}</h2>
        <h3 className="text-white text-xl mt-6">{subtitle}</h3>
        <p className="text-dark-40 mt-2">{description}</p>
        <Link to="" className="text-dark-blue mt-4 hover:text-white">
          Ler mais
        </Link>
      </div>
    </div>
  );
}
