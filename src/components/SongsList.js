import { useSelector } from 'react-redux';
import { selectSongs } from '../Redusers/songReducer';

function SongList() {
    const songs = useSelector(selectSongs);

    return (
        <div>
            <h2>Songs</h2>
            <ul>
                {songs.map((song) => {
                    return (
                        <li key={song.id}>
                            <h3>{song.title}</h3>
                            <p>Artist: {song.artist}</p>
                            <p>Year: {song.year}</p>
                            <p>Description: {song.description}</p>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SongList