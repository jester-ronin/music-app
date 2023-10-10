import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectPlaylistById} from '../Redusers/playlistReduser';
import SongsList from "./SongsList";

function PlaylistDetail() {
    const { id } = useParams();
    const playlistId = isNaN(id) ? id : Number(id)
    const playlist = useSelector(state => selectPlaylistById(playlistId, state));

    return (
        <div>
            {playlist ? (
                <div>
                    <h2>Playlist: {playlist.name}</h2>
                    <p>Description: {playlist.description}</p>
                    <SongsList songs={playlist.songs}
                    />
                </div>
            ) : (
                <p>Playlist not found</p>
            )}
        </div>
    )
}

export default PlaylistDetail;
