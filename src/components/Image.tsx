import { ImageProps } from "../utils/types";

export function Image({ imageURL, title, type, description }: ImageProps) {
  return (
    <div className="relative -z-10">
      <img
        src={imageURL}
        alt="Imagem"
        className="w-full h-auto border border-none rounded-md"
      />
      <div className="w-full h-40 md:h-36 absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t to-gradient-image-to from-gradient-image-from">
        <span className="w-20 p-1 grid place-items-center bg-gradient-to-b from-brand to-dark-blue border border-none rounded-md">
          <h2 className="uppercase text-base md:text-lg">{type}</h2>
        </span>
        <h3
          className={
            description
              ? "w-full h-3/6 text-xl md:text-2xl mt-2 overflow-hidden overflow-ellipsis"
              : "w-full h-4/6 text-xl md:text-2xl mt-2 overflow-hidden overflow-ellipsis"
          }
        >
          {title}
        </h3>
        <p className="h-2/6 md:h-3/6 lg:h-full text-sm md:text-base mt-2 text-dark-40 overflow-hidden overflow-ellipsis lg:overflow-visible">
          {description}
        </p>
      </div>
    </div>
  );
}
