import { useSelector } from 'react-redux';
import { selectPlaylists } from '../playlistReduser';



function PlaylistList() {
    const playlists = useSelector(selectPlaylists);

    return (
        <div>
            <h2>Playlists</h2>
            <ul>
                <li >
                    <h3>All</h3>
                    <p>Description: All available songs on the site</p>
                </li>
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