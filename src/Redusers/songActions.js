export const addSong = (song) => ({
    type: 'ADD_SONG',
    payload: song,
});

export const removeSong = (song) => ({
    type: 'REMOVE_SONG',
    payload: song,
});
