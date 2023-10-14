export const createPlaylist = (playlistName, playlistDescription) => ({
    type: 'CREATE_PLAYLIST',
    payload: { name: playlistName, description: playlistDescription },
  });
  

export const addSongToPlaylist = (playlistId, song) => ({
    type: "ADD_SONG_TO_PLAYLIST",
    payload: { playlistId, song },
});

export const removeSongFromPlaylist = (playlistId, songId) => ({
  type: 'REMOVE_SONG_FROM_PLAYLIST',
  payload: {
    playlistId,
    songId,
  },
});

export const setPlaylistImage = (playlistId, imageURL) => ({
  type: 'SET_PLAYLIST_IMAGE',
  payload: { playlistId, imageURL },
});

export const setUserPLaylistImage = (playlistId, imageURL) => ({
  type: 'SET_USER_PLAYLIST_IMAGE',
  payload: { playlistId, imageURL },
})