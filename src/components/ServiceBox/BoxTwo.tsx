import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const BoxTwo = () => {
  const { componentRef, cardStyle } = useScrollGrow(-1200);


  return (
    <motion.div
      ref={componentRef}
      style={cardStyle}
      transition={{
        duration: 1,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="bg-green-600 h-[320px] rounded-xl col-span-6 lg:col-span-5"
    ></motion.div>
  );
};

export default BoxTwo;
