export const createPlaylist = (playlistName) => ({
    type: 'CREATE_PLAYLIST',
    payload: playlistName,
});

export const addSongToPlaylist = (playlistName, song) => ({
    type: "ADD_SONG_TO_PLAYLIST",
    payload: {playlistName, song},
});