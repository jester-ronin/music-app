import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './songsList.css'
import Card from 'react-bootstrap/Card';


function SongsList({ songs, onRemoveSong }) {
    return (
        <div className="container text-center">
            <h2>Songs:</h2>
            <div className='song-container'>
                <ul className="container center">
                    {songs.map((item) => (
                        <Card className='card'>
                            <Card.Body>
                                <li key={item.id} >
                                    <h3 className="text-with-texture">{item.artist}</h3>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>Year: {item.year}</Card.Text>
                                    <Card.Text>Description: {item.description}</Card.Text>
                                    <button id='trash' onClick={() => onRemoveSong(item.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </li>
                            </Card.Body>
                        </Card>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default SongsList;
