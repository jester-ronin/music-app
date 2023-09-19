const playlistReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_PLAYLIST':
        return [...state, { name: action.payload, songs: [] }];
      case 'ADD_SONG_TO_PLAYLIST':
        return state.map(playlist => {
          if (playlist.name === action.payload.playlistName) {
            return { ...playlist, songs: [...playlist.songs, action.payload.song] };
          }
          return playlist;
        });
      default:
        return state;
    }
  };
  
  export default playlistReducer;