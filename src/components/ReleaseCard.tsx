import { Link } from "react-router-dom";
import { ReleaseCardProps } from "../utils/types";

export function ReleaseCard({ type, title, description }: ReleaseCardProps) {
  return (
    <div>
      <h2 className="w-fit p-2 bg-gradient-to-b from-brand to-dark-blue text-white uppercase rounded">
        {type}
      </h2>
      <h3 className="text-white text-xl mt-6">{title}</h3>
      <p className="text-dark-40 mt-2">{description}</p>
      <Link to="" className="text-dark-blue mt-4 hover:text-white">
        Ler mais
      </Link>
    </div>
  );
}
