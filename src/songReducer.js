const initialState = {
  user: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        user: action.payload,
      };
    case "REMOVE_SONG":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
