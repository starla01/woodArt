import { useReducer } from 'react';
import { CounterState } from '../interfaces/interfaces';
import { counterReducer } from '../state/counterReducer';
import { doReset, doIncreaseBy } from '../actions/actions';


const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}



export const CounterReducerComponent = () => {
  
  const [ stateCounter, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  function handleClick() {
    return false;
  }

  function handleReset() {
    dispatch( doReset() );
  }

  function increaseBy(value: number) {
    dispatch( doIncreaseBy(value) )
  }

  return (
    <>
      <h1>Counter Reducer segmentado</h1>
    <pre>
      { JSON.stringify( stateCounter, null, 2) }
    </pre>

      <button onClick={() => increaseBy(1)}>
        +1
      </button>
      <button onClick={() => increaseBy(5)}>
        +5
      </button>
      <button onClick={() => increaseBy(10)}>
        +10
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  )
}
