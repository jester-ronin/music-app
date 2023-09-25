import './App.css';
import Routes from './Routes';
import StyleCheck from './StyleCheck';
import PlaylistList from './components/PlaylistList';
import SongList from './components/SongsList';
import songExport from "./assets/songExport";

let music = songExport;
console.log(music)


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
