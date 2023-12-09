import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  return (
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i.id} />
      ))}
    </motion.ul>
  );
};

const itemIds = [
  { id: 0, name: "Início", pathname: "/", isButton: false, buttonColor: null },
  {
    id: 1,
    name: "Séries",
    pathname: "/series",
    isButton: false,
    buttonColor: null,
  },
  {
    id: 2,
    name: "Filmes",
    pathname: "/movies",
    isButton: false,
    buttonColor: null,
  },
  {
    id: 3,
    name: "Animes",
    pathname: "/animes",
    isButton: false,
    buttonColor: null,
  },
  {
    id: 4,
    name: "Games",
    pathname: "/games",
    isButton: false,
    buttonColor: null,
  },
  {
    id: 5,
    name: "Minha conta",
    pathname: "/myaccount",
    isButton: true,
    buttonColor: "from-brand to-dark-blue",
  },
  {
    id: 6,
    name: "Sair",
    pathname: "",
    isButton: true,
    buttonColor: "from-warning to-dark-warning",
  },
];
