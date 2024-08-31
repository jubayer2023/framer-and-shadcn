import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

const introChiildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.3,
    },
  },
};

const imageAnimate = {
  initial: { y: 0, rotate: 0, scale: 3 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,

      y: {
        duration: 1.5,
        ease: "easeInOut",
        repeatType: "reverse",
        repeat: Infinity,
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden ">
      <Container className="grid grid-cols-1 md:grid-cols-2 place-content-center h-screen">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="visible"
          className="space-y-4 pt-8"
        >
          <motion.h3
            variants={introChiildren}
            className="text-6xl font-bold text-nowrap"
          >
            <span className="text-gray">Don't Worry,</span> <br />{" "}
            <span className="text-dark-gray">We will fix it</span>
          </motion.h3>
          <motion.p
            variants={introChiildren}
            className="max-w-[42ch] text-dark-gray"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            suscipit.
          </motion.p>
          <motion.div variants={introChiildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <div className="h-[250px] w-3/4 mx-auto pt-8 ">
          <motion.div
            variants={imageAnimate}
            initial="initial"
            animate="animate"
            className="w-full h-full flex items-center justify-center text-white bg-red-600 font-bold uppercase text-sm rounded-md"
          >
            <h3>Image</h3>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
