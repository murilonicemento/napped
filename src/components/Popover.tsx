import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
          <nav className="flex flex-col gap-4 text-white mb-4">
            <Link
              to="/"
              className="cursor-pointer hover:text-dark-blue transition-colors"
            >
              Início
            </Link>
            <Link
              to="/series"
              className="cursor-pointer hover:text-dark-blue transition-colors"
            >
              Séries
            </Link>
            <Link
              to="/movies"
              className="cursor-pointer hover:text-dark-blue transition-colors"
            >
              Filmes
            </Link>
            <Link
              to="/animes"
              className="cursor-pointer hover:text-dark-blue transition-colors"
            >
              Animes
            </Link>
            <Link
              to="/games"
              className="cursor-pointer hover:text-dark-blue transition-colors"
            >
              Jogos
            </Link>
          </nav>
          <Link
            to="/login"
            className="text-white bg-gradient-to-b from-brand to-dark-blue w-36 flex justify-center border rounded border-none p-2 hover:text-dark-blue transition-colors"
          >
            Minha Conta
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
