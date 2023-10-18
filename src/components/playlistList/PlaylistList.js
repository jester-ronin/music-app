import { useSelector } from 'react-redux';
import { selectPlaylists } from '../../Redusers/playlistReducer';
import { Link } from "react-router-dom";
import AddNewPlaylist from '../addNewPlaylist/AddNewPlaylist';
import './playlistList.css'



function PlaylistList() {
    const playlists = useSelector(selectPlaylists);

    return (
        <div class="container text-center">
            <AddNewPlaylist />
            <img id='main-image' src='https://media.istockphoto.com/id/172757757/photo/music-can.jpg?s=612x612&w=0&k=20&c=9t6JXU0B2ubVRPO8aLdCmotlSYnT8lv13ZKL17vpIrs=' alt="Playlist" />
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
        </div>

    )
}
export default PlaylistList;