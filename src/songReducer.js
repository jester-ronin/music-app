import SongExport from "./assets/SongExport";

const initialState = {
  SongExport
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload];
    case "REMOVE_SONG":
      return state.filter(song => song !== action.payload);
    default:
      return state;
  }
};

export default songReducer;

