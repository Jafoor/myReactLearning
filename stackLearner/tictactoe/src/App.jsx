import logo from './logo.svg';
import './App.css';
import Game from './component/game'
const App = () => {
  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <Game
      />
    </div>
  )
}

export default App;