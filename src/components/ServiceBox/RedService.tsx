import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const RedService = () => {
  const { cardStyle, componentRef } = useScrollGrow( 100);
  console.log(componentRef.current);

  return (
    <motion.div
      ref={componentRef}
      style={cardStyle}
      className="w-3/4 mx-auto my-12 py-32 bg-red-400  text-white text-center"
    >
      This is a demo text
    </motion.div>
  );
};

export default RedService;
