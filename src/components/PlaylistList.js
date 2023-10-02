import { useSelector } from 'react-redux';
import { selectPlaylists } from '../playlistReduser';
import AddNewPlaylist from './AddNewPlaylist'
import { Link } from "react-router-dom"



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
                           <h3><Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link></h3> 
                            {playlist.description && <p>Description: {playlist.description}</p>}
                        </li>
                    )
                })}
            </ul>
            <AddNewPlaylist />
        </div>

    )
}
export default PlaylistList;