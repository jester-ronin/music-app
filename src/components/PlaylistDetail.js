import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectPlaylists } from '../Redusers/playlistReduser';

function PlaylistDetail() {
    const { id } = useParams();
    const playlists = useSelector(selectPlaylists);
    const playlistId = isNaN(id) ? id : Number(id);

    const playlist = playlists.find((playlist) => playlist.id === playlistId);

    return (
        <div>
            {playlist ? (
                <div>
                    <h2>Playlist: {playlist.name}</h2>
                    <p>Description: {playlist.description}</p>
                </div>
            ) : (
                <p>Playlist not found</p>
            )}
        </div>
    )
}

export default PlaylistDetail;
