import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(0);
  const counterElement = useRef<HTMLHeadingElement>(null);

  function handleClick(){
    //setCounter(prev => prev === MAXIMUN_COUNT ? prev : prev + 1);
    setCounter( prev => Math.min(prev + 1, MAXIMUN_COUNT));
  }

  useEffect(() => {
    if(counter < 10) return;

    console.log('%cSe llego al valor maximo', 'color: red; background-color: black; font-size: 24px; font-weight: bold');
    
    const tl = gsap.timeline();
    tl.to(counterElement.current, { y: -100, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

  }, [counter]);
  

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}
