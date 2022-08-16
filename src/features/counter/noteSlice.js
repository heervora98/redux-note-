
const initialState = []

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      state = [...state, action.payload];
      return state;

    case "UPDATE_TITLE":
      const updateTitle = state.map((note) => note.id === action.payload.id ? action.payload : note)
      state = updateTitle;
      return state;

    case "UPDATE_DESCRIPTION":
      const updateDscription = state.map((note) => note.id === action.payload.id ? action.payload : note)
      state = updateDscription;
      return state;

    case "DELETE_NOTE":
      const filterNote = state.filter((note) => note.id === action.payload);
      state = filterNote;
      return state;

    default:
      return state;
  }
}

export default NoteReducer;