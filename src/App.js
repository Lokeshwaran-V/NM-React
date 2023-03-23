// import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
import Count from './Count';

function App() {
  
  let array = [1,2,3];

  return (
    <div className="App">
      <h1>Lokesh </h1>
      <hr></hr>

      {array.map((x) =><Text Numbers = {x}/>)}
      <Count />
    </div>
  );
}

export default App;
