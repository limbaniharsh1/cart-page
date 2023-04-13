// import logo from './logo.svg';
import './App.css';
import Add from './Add';
import { useState } from 'react';
import Total from './Total'

function App() {
  const [ftotal, setftotal] = useState(300)
  return (
    <div className="App">
      <div className="box">
        <h1>menu</h1>
          <Add name={'gujarati thali'} price={80} setftotal={setftotal} ftotal={ftotal}/>
          <Add name={'chinese'} price={100} setftotal={setftotal} ftotal={ftotal}/>
          <Add name={'dhosa'} price={120} setftotal={setftotal} ftotal={ftotal}/>
          
          <h2>Total Payable Amount : {ftotal}</h2>
      </div>
    </div>
  );
}

export default App;
