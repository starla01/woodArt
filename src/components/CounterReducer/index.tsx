import { useReducer } from 'react';

interface CounterState {
  counter: number
  previous: number
  changes: number
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

type CounterAction =
    { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' } 


const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

  const { counter, changes } = state;

  switch (action.type) {
    case 'reset':
        return {
          counter: 0,
          changes: 0,
          previous: 0
        }
    case 'increaseBy': 
        return {
          counter: counter + 1,
          changes: changes + action.payload.value,
          previous: changes
        }
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {
  
  const [ stateCounter, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  function handleClick() {
    return false;
  }

  function handleReset() {
    dispatch({ type: 'reset' });
  }

  function increaseBy(value: number) {
    dispatch({ type: 'increaseBy', payload: {
      value
    }})
  }

  return (
    <>
      <h1>Counter Reducer</h1>
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
