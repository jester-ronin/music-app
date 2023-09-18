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


let song = new Song("Nirvana", "In bloom", 1991, "Song from album Nevermind")
const song2 = new Song("Blur", "Song2", 1999, "90s rock masterpiece");
let playlist = new Playlist('Rock')
playlist.addSong(song)
playlist.addSong(song2)


export default Playlist;