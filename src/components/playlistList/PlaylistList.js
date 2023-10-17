import { useSelector } from 'react-redux';
import { selectPlaylists } from '../../Redusers/playlistReducer';
import { Link } from "react-router-dom";
import AddNewPlaylist from '../addNewPlaylist/AddNewPlaylist';
import './playlistList.css'



function PlaylistList() {
    const playlists = useSelector(selectPlaylists);

    return (
        <div class="container text-center">
            <img src='https://e1.pxfuel.com/desktop-wallpaper/435/382/desktop-wallpaper-audio-cassette-minimalist-artist-backgrounds-and-music-minimalist-thumbnail.jpg' alt="Playlist" />
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