import { useEffect } from "react";
import useWindowSize from "./useWindowSize";

interface IScrollConfig {
  ease: number;
  current: number;
  previos: number;
  rounded: number;
  difference: number;
  acceleration: number;
  velocity: number;
  skew: number;
}

const useScrollDate = (callBack: (scrollDate: IScrollConfig) => void) => {
  const scrollDate: IScrollConfig = {
    ease: 0.1,
    current: 0,
    previos: 0,
    rounded: 0,
    difference: 0,
    acceleration: 0,
    velocity: 0,
    skew: 0,
  };

  const { height } = useWindowSize();

  const scroll = () => {
    scrollDate.current = window.scrollY;
    scrollDate.previos +=
      (scrollDate.current - scrollDate.previos) * scrollDate.ease;
    scrollDate.rounded = Math.round(scrollDate.previos * 100) / 100;
    scrollDate.difference = scrollDate.current - scrollDate.rounded;
    scrollDate.acceleration = scrollDate.difference / height;
    scrollDate.velocity += scrollDate.acceleration;
    scrollDate.skew = scrollDate.velocity * 7.5;
    
    callBack(scrollDate);
  };

  useEffect(() => {
    requestAnimationFrame(() => scroll());
  }, []);
};

export default useScrollDate;
