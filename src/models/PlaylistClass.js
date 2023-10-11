import Song from "./SongClass"; 


class Playlist {
    constructor(name, songs = []) {
        this.name = name;
        this.songs = songs;
    }

    addSong(song) {
        this.songs.push(song)
    }

    removeSong(song) {
        const index = this.songs.indexOf(song);
        if (index !== -1) {
            this.songs.splice(index, 1);
        }
    }
}


export default Playlist;