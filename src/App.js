import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useCounter } from './store/store.js';

function App() {
  const [namey, setNamey] = useState('');
  const [{name, count}, {setName, increment}] = useCounter();
  const handleChangeName = () => {
    setName(namey);
    increment();
    setNamey('');
  }
  return (
    <div className="App">
      <h1>react sweet state test</h1>
      <h2>Name: {name }</h2>
      <h2>Count: {count }</h2>
      
      <input type='text' value={namey} onChange={(e) => setNamey(e.target.value)} name='firstName'/>
      <button onClick={handleChangeName}>Change name</button>
    </div>
  );
}

export default App;
