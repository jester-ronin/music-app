import playlistExport from "../assets/playlistExport";
import { v4 as uuidv4 } from 'uuid';

export const selectPlaylists = (state) => state.playlists.playlists;
export const selectPlaylistById = (id, state) => state.playlists.playlists.find((playlist) => playlist.id === id);

const initialState = {
  playlists: playlistExport,
};

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
      const { playlistId, song } = action.payload;
      const isSongInPlaylist = state.playlists
        .find(playlist => playlist.id === playlistId)
        .songs.some(existingSong => existingSong.id === song.id);

      if (!isSongInPlaylist) {
        return {
          ...state,
          playlists: state.playlists.map((playlist) => {
            if (playlist.id === playlistId) {
              return {
                ...playlist,
                songs: [...playlist.songs, song],
              };
            }
            return playlist;
          }),
        };
      } else {
        return state;
      }

    case 'REMOVE_SONG_FROM_PLAYLIST':
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist.id === action.payload.playlistId) {
            return {
              ...playlist,
              songs: playlist.songs.filter(song => song.id !== action.payload.songId),
            };
          }
          return playlist;
        }),
      };

    case 'SET_PLAYLIST_IMAGE':
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist.id === action.payload.playlistId) {
            return {
              ...playlist,
              imageURL: action.payload.imageURL,
            };
          }
          return playlist;
        }),
      };

    case 'SET_USER_PLAYLIST_IMAGE':
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist.id === action.payload.playlistId) {
            return {
              ...playlist,
              imageURL: action.payload.imageURL,
            };
          }
          return playlist;
        }),
      };



    default:
      return state;
  }
};

export default playlistReducer;
