class Song {
    constructor(artist,title,year,description,id) {
        this.name = artist;
        this.title = title;
        this.year = year;
        this.description = description;
    }


}

let song = new Song("Nirvana","In bloom", 1991, "Song from album Nevermind")

console.log(song)

export default Song;