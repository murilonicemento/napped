import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MenuItemProps } from "../../utils/types";
import { NavLink } from "../NavLink";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }: { i: MenuItemProps }) => {
  const { pathname } = useLocation();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-start gap-4 text-white mb-4"
    >
      <NavLink
        to={i.pathname}
        isActive={pathname === i.pathname}
        text={i.name}
        isButton={i.isButton}
        buttonColor={i.buttonColor}
      />
    </motion.li>
  );
};
