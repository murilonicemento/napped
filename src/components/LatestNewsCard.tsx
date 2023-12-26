import { Link, useNavigate } from "react-router-dom";
import { LatestNewsCardProps } from "../utils/types";

export function LatestNewsCard({
  imageURL,
  type,
  title,
  description,
  id,
}: LatestNewsCardProps) {
  const navigate = useNavigate();
  const HandleOpenNotice = () => {
    navigate(`/notice/${id}/${type}`);
  };

  return (
    <div
      className="w-full lg:w-96 border border-solid rounded border-dark-30 pb-8 mb-10"
      onClick={HandleOpenNotice}
    >
      <img src={imageURL} alt="Image" className="" />
      <div className="w-10/12 m-auto mt-6">
        <h2 className="text-dark-blue uppercase text-base md:text-xl">
          {type}
        </h2>
        <h3 className="text-white text-xl md:text-2xl mt-6 overflow-hidden overflow-ellipsis">
          {title}
        </h3>
        <p className="max-h-40 text-dark-40 text-base md:text-lg mt-2 overflow-hidden overflow-ellipsis">
          {description}
        </p>
        <Link
          to=""
          className="text-dark-blue mt-6 text-base md:text-lg hover:text-white"
        >
          Ler mais
        </Link>
      </div>
    </div>
  );
}
