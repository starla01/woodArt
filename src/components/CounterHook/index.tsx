import { useCounter } from "../../hooks/useCounter"

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 5, 
  })  
  return (
    <>
      <h1 >Counter: {counter}</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button  onClick={handleClick}>+1</button>
    </>
  )
}
