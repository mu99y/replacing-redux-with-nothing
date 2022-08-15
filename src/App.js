import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState([0,5,10])
  const [selected, setSelected] = useState(0);

  function inc(){
    let newValues = [...values];
    newValues[selected]++;
    setValues(newValues);
  }

  function dec(){
    let newValues = [...values];
    newValues[selected]--;
    setValues(newValues);
  }

  function set(x){
    let newValues = [...values];
    newValues[selected] = x;
    setValues(newValues);
  }

  return (
    <div className="App">
      
       <h4>Test</h4>

       <h2>{values.join(" | ")}</h2>
        <button onClick={inc}>+</button>&nbsp;&nbsp;&nbsp;
        <button onClick={dec}>-</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>set(values[selected]+10)}>+10</button>

       <h2>Change Selection</h2>
       <button onClick={()=>setSelected(0)}>0</button>&nbsp;&nbsp;&nbsp;
       <button onClick={()=>setSelected(1)}>1</button>&nbsp;&nbsp;&nbsp;
       <button onClick={()=>setSelected(2)}>2</button>
    </div>
  );
}

export default App;
