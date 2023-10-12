import SongExport from "../assets/songExport";
import { v4 as uuidv4 } from 'uuid';



const initialState = {
  songs: SongExport,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      const newSong = {
        id: uuidv4(),
        artist: action.payload.artist,
        title: action.payload.title,
        year: action.payload.year,
        description: action.payload.description,
      };
      return {
        ...state,
        songs: [...state.songs, newSong],
      };
    case 'REMOVE_SONG':
      debugger
      return {
        ...state,
        songs: state.songs.filter(song => song.id !== action.payload),
      };
    default:
      return state;
  }
};


export const selectSongs = (state) => state.songs.songs;
export default songReducer;



