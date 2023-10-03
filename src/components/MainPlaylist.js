import SongList from "./SongList";
function MainPlaylist() {
    return (
        <div>
            <h2>Playlist</h2>
            <ul>
                <li >
                    <h3>All</h3>
                    <p>Description: All available songs on the site</p>
                    <SongList/>
                </li>
                </ul>
        </div>
    )
}

export default MainPlaylist;