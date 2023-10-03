import { useSelector } from 'react-redux';
import { selectPlaylists } from '../playlistReduser';
import AddNewPlaylist from './AddNewPlaylist'
import { Link } from "react-router-dom"



function PlaylistList() {
    const playlists = useSelector(selectPlaylists);

    return (
        <div>
            <ul>
                <li>
                    <h3><Link to="/playlist/all">All songs</Link></h3>
                    <p>Description: All available songs on the site</p>
                </li>
            </ul>
            <ul>
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