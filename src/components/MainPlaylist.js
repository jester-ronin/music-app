import { useSelector } from 'react-redux';
import { selectSongs } from '../songReducer';

function MainPlaylist() {
    const songs = useSelector(selectSongs);

    return (
        <div>
          <h2>All Songs</h2>
          <ul>
            {songs.map((song) => {
              return (
                <li key={song.id}>
                  <h3>{song.artist}</h3> 
                  <h4>{song.title}</h4>
                  <h5>{song.year}</h5>
                  <p>Description: {song.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
    
export default MainPlaylist;