import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './songsList.css'


function SongsList({ songs, onRemoveSong }) {
    return (
        <div class="container text-center">
            <h2 id='songs'>Songs:</h2>
            <ul>
                {songs.map((item) => (
                    <li key={item.id}>
                        <h3>{item.artist}</h3>
                        <p>{item.title}</p>
                        <p>Year: {item.year}</p>
                        <p>Description: {item.description}</p>
                        <button id='trash' onClick={() => onRemoveSong(item.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default SongsList;