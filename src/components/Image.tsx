import { ImageProps } from "../utils/types";

export function Image({ imageURL, title, subtitle, description }: ImageProps) {
  return (
    <div className="relative">
      <img src={imageURL} alt="Imagem" className="w-full h-auto" />
      <div className="w-full absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t to-gradient-image-to from-gradient-image-from">
        <span className="w-20 p-1 grid place-items-center bg-gradient-to-b from-brand to-dark-blue border border-none rounded-md">
          <h2 className="uppercase">{title}</h2>
        </span>
        <h3 className="text-xl mt-2">{subtitle}</h3>
        <p className="text-sm mt-2 text-dark-40">{description}</p>
      </div>
    </div>
  );
}
