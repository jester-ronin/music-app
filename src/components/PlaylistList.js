import { useSelector } from 'react-redux';
import { selectPlaylists } from '../playlistReduser';



function PlaylistList() {
    const playlists = useSelector(selectPlaylists);

    return (
        <div>
            <h2>Playlists</h2>
            <ul>
                {playlists.map((playlist) => {
                    return (
                        <li key={playlist.id}>
                            <h3>{playlist.name}</h3>
                            <p>Description: {playlist.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default PlaylistList;