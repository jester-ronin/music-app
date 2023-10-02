import { useDispatch } from 'react-redux';
import { createPlaylist } from '../playlistActions';
import ModalNewPlaylist from './ModalNewPlaylist';

function AddNewPlaylist() {
    const dispatch = useDispatch();

    const handleSave = (playlistName, playlistDescription) => {
        if (!playlistName) {
            console.log("empty value")
            return;
        }
        dispatch(createPlaylist(playlistName,playlistDescription));
    };

    return (
        <div>
            <ModalNewPlaylist onSave={(playlistName, playlistDescription) => handleSave(playlistName, playlistDescription)} />
        </div>
    );
}

export default AddNewPlaylist;
