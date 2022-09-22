import { useEffect, useRef } from "react";

import lottie from "lottie-web";

const Animation = () => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: require("./success.json"),
        // loop: false,
        container: element.current,
      });
    }
    return () => {
      lottieInstance.current?.destroy();
    };
  }, []);

  return <div ref={element}></div>;
};

export default Animation;
