import './App.css';
import Routes from './Routes';
import StyleCheck from './StyleCheck';
import PlaylistList from './components/PlaylistList';
import SongList from './components/SongsList';



function App() {
  return (
    <div className="App">
      <h1>Hello, App!</h1>
      <StyleCheck/>
      <PlaylistList/>
      <SongList/>
    </div>
  );
}

export default App;
