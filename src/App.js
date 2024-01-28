import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(0);
  const onClickPlus=()=>{setCount(count+1)};
  const onClickMinus=()=>{setCount(count-1)};
  return (
    <div className="App">
    <div>
      <p>Counter:</p>
      <p className='number'>{count}</p>
      <button className='minus'onClick={onClickMinus}>-</button>
      <button className='plus' onClick={onClickPlus}>+</button>
    </div>
    </div>
  );
}

export default App;
