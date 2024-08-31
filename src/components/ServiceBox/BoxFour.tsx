import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const BoxFour = () => {
  const { componentRef, cardStyle } = useScrollGrow(0, 20);

  return (
    <motion.div
      ref={componentRef}
      style={cardStyle}
      className="bg-green-600 h-[320px] rounded-xl col-span-12"
    ></motion.div>
  );
};

export default BoxFour;
