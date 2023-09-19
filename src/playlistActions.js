export const createPlaylist = (song) => ({
    type: 'CREATE_PLAYLIST',
    payload: song,
});

export const addSongToPlaylist = (playlistName, song) => ({
    type: "ADD_SONG_TO_PLAYLIST",
    payload: {playlistName, song},
});