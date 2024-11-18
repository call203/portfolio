import { useRef } from "react";
import { useInView } from "framer-motion";

export const useInViewWithRef = () => {
  const viewRef = useRef(null);

  const isInView = useInView(viewRef, {
    amount: 0.5,
    margin: "-50px 0px 0px 0px"
  });

  return { viewRef, isInView };
};
