import './App.css';
import Routes from './Routes';
import StyleCheck from './StyleCheck';
import PlaylistList from './components/PlaylistList';

function App() {
  return (
    <div className="App">
      <h1>Hello, App!</h1>
      <StyleCheck/>
      <PlaylistList/>
    </div>
  );
}

export default App;
