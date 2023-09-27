import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectPlaylists } from '../playlistReduser';


function PlaylistDetail() {
    const { id } = useParams();
    const playlists = useSelector(selectPlaylists);

    const playlist = playlists.find((playlist) => playlist.id === Number(id));

    return (
        <div>
            <h2>Playlist {playlist.name}</h2>
            {playlist ? (
                <div>
                    <p>Description: {playlist.description}</p>
                </div>
            ) : (
                <p>Playlist not found</p>
            )}
        </div>
    )
}

export default PlaylistDetail;