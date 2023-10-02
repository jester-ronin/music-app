export const createPlaylist = (playlistName, playlistDescription) => ({
    type: 'CREATE_PLAYLIST',
    payload: { name: playlistName, description: playlistDescription },
  });
  

export const addSongToPlaylist = (playlistName, song) => ({
    type: "ADD_SONG_TO_PLAYLIST",
    payload: { playlistName, song },
});