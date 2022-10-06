import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import './style.css'

function App() {
  return (
    <div className="App">
      
      <Example/>
      <Header/>
      
      <Board/>
      <div className='Jordan'>
      <Player  whichPlayer='X' score="50"/>
      </div>
      <div className='Blake'>
      <Player  whichPlayer='O' score="100"/>
      </div>
    </div>
  );
}

export default App;
