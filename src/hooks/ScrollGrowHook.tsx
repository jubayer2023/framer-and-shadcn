import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrow = (x = 0, y = 0) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef ,
    offset: ["0 1", "1 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const xValue = useTransform(scrollYProgress, [0, 1], [x, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [y, 1]);

  const cardStyle = {
    scale: scaleValues,
    opacity: opacityValues,
    x: xValue,
    y: yValue,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  };
  return { componentRef, cardStyle };
};

export default useScrollGrow;
