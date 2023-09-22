
function SongList({ music }) {
    return (
        <div>
            <h2>Songs</h2>
            <ul>
                {music.map((song) => {
                    return (
                        <li key={song.id}>
                           {song.id} {song.artist} {song.title} {song.year} {song.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SongList