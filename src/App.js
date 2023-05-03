import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
     {
        <><div>
          <div>{count}</div>
          </div><button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>Increase by 1</button>
          <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)}>Decrease by 1</button>
          <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>Reset to 0</button></>

    }
         
      </header>
    </div>
  );
}

export default App;