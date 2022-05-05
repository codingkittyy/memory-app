import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">

      <div className='container d-flex'>
        <div className='row d-flex justify-content-center align-items-center'>
          <Game />
      </div>
        </div>
      </div>
     
  );
}

export default App;
