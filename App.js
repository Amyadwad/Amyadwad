import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div claaName="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <h2>{count}</h2>
          <div className="my-5"></div>
          <button className="btn btn-success mx-3" onClick={()=> setCount(count+1)}>Increament</button>
          <button className="btn btn-danger mx-3" onClick={()=> setCount(count-1)} disabled={count===0}>Decreament</button>
          <button className="btn btn-secondary mx-3">Reset</button>
        </div>

      </div>
    </div>


  )

    
      
}

export default App;
