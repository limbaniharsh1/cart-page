import logo from './logo.svg';
import './App.css';
import Add from './Add';

function App() {
  let chk = <App/>
  return (
    <div className="App">
      <div className="box">
        <h1>menu</h1>
          <Add name={'gujarati thali'} price={80}/>
          <Add name={'chinese'} price={100}/>
          <Add name={'dhosa'} price={120}/>
      </div>
    </div>
  );
}

export default App;
