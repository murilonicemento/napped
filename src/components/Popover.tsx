import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";

export function PopAnchor() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button className="flex gap-1 flex-col">
          <div className="w-6 border border-b-2 border-dark-blue"></div>
          <div className="w-6 border border-b-2 border-dark-blue"></div>
          <div className="w-6 border border-b-2 border-dark-blue"></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody className="w-80 mt-16 border border-none rounded-xl bg-dark-10 p-4">
          <ul className="flex flex-col gap-4 text-text mb-4">
            <li className="cursor-pointer">Início</li>
            <li className="cursor-pointer">Séries</li>
            <li className="cursor-pointer">Filmes</li>
            <li className="cursor-pointer">Animes</li>
            <li className="cursor-pointer">Jogos</li>
          </ul>
          <a
            href="/login"
            className="text-text bg-gradient-to-b from-brand to-dark-blue w-36 flex justify-center border rounded border-none p-2"
          >
            Minha Conta
          </a>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
