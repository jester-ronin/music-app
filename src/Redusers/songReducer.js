import SongExport from "../assets/songExport";
import { v4 as uuidv4 } from 'uuid';



const initialState = {
  songs: SongExport,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      const newPlaylist = {
        id: uuidv4(),
        artist: action.payload.artist,
        title: action.payload.title,
        year: action.payload.year,
        description: action.payload.description,
        songs: [],
      };
      return {
        ...state,
        songs: [...state.songs, newPlaylist],
      };
    case 'REMOVE_SONG':
      return {
        ...state,
        songs: state.songs.filter(song => song !== action.payload),
      };
    default:
      return state;
  }
};


export const selectSongs = (state) => state.songs.songs;
export default songReducer;

