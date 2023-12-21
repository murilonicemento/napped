import { Link } from "react-router-dom";
import { ReleaseCardProps } from "../utils/types";

export function ReleaseCard({ type, title, description }: ReleaseCardProps) {
  return (
    <div>
      <h2 className="w-fit p-2 bg-gradient-to-b from-brand to-dark-blue text-white uppercase text-base md:text-xl rounded">
        {type}
      </h2>
      <h3 className="text-white text-xl md:text-2xl mt-6">{title}</h3>
      <p className="text-dark-40 text-base md:text-lg mt-2 max-h-36 overflow-hidden overflow-ellipsis">
        {description}
      </p>
      <Link
        to=""
        className="text-dark-blue mt-4 text-base md:text-lg hover:text-white"
      >
        Ler mais
      </Link>
    </div>
  );
}
