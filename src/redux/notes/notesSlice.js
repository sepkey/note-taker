import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    searchQuery: "",
    selectedColor: "",
  },
  reducers: {
    addNotes(state, action) {
      state.items.push(action.payload);
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    removeNote(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    setSelectedColor(state, action) {
      state.selectedColor = action.payload;
    },
    editNote(state, action) {
      const { id, note } = action.payload;
      const index = state.items.findIndex((i) => i.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], note };
      }
    },
  },
});
// export const notesActiond = notesSlice.actions; //former approach
export const {
  addNotes,
  removeNote,
  editNote,
  setSearchQuery,
  setSelectedColor,
} = notesSlice.actions; //new approach
export default notesSlice.reducer;
