import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 1}) => {
  const [counter, setCounter] = useState(0);
  const elementToAnimate = useRef<any>(null);

  const tl = gsap.timeline();

  function handleClick(){
    //setCounter(prev => prev === MAXIMUN_COUNT ? prev : prev + 1);
    setCounter( prev => Math.min(prev + 1, maxCount));
  }

  useLayoutEffect(() => {

    if( !elementToAnimate.current) return;
    
    tl.to(elementToAnimate.current, { y: -100, duration: 0.2, ease: 'ease.out' })
              .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
              .pause()
  })

  useEffect(() => {
    if( counter < maxCount ) return;
    tl.play();
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  }

}
