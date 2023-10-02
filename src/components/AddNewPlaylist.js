import { useDispatch } from 'react-redux';
import { createPlaylist } from '../playlistActions';
import ModalWindow from './ModalWindow';

function AddNewPlaylist() {
    const dispatch = useDispatch();

    const handleSave = (playlistName) => {
        if (!playlistName) {
            console.log("empty value")
            return;
        }
        dispatch(createPlaylist(playlistName));
    };

    return (
        <div>
            <ModalWindow onSave={(playlistName) => handleSave(playlistName)} />
        </div>
    );
}

export default AddNewPlaylist;
