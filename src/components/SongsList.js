//import { useSelector } from 'react-redux';
//import { selectSongs } from '../Redusers/songReducer';


function SongList({ songs }) {
    return (
        <div>
            <h2>Songs</h2>
            <ul>{songs.map(item =>
                <li key={item.id}>
                    <h3>{item.artist}</h3>
                    <p>{item.title}</p>
                    <p>Year: {item.year}</p>
                    <p>Description: {item.description}</p>
                </li>
            )}
            </ul>
        </div>
    )
}

export default SongList

