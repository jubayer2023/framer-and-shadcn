import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      }}
      className="h-16 fixed w-full bg-white z-[999]"
    >
      <nav className="w-full max-w-screen-lg mx-auto px-[20px] flex justify-between items-center h-full">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <Button>
            <NavLink to={"/"}>Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
