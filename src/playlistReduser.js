import playlistExport from "./assets/playlistExport";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  playlists: playlistExport,
}

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLAYLIST':
      const newPlaylist = {
        id: uuidv4(),
        name: action.payload.name,
        description: action.payload.description,
        songs: [],
      };
      return { ...state, playlists: [...state.playlists, newPlaylist] };
    case 'ADD_SONG_TO_PLAYLIST':
      return {
        ...state,
        playlists: state.playlists.map(playlist => {
          if (playlist.name === action.payload.playlistName) {
            return { ...playlist, songs: [...playlist.songs, action.payload.song] };
          }
          return playlist;
        }),
      };
    default:
      return state;
  }
};


export const selectPlaylists = (state) => state.playlists.playlists;
export default playlistReducer;