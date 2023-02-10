import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    searchQuery: "",
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
  },
});
// export const notesActiond = notesSlice.actions; //former approach
export const { addNotes, setSearchQuery, removeNote } = notesSlice.actions; //new approach
export default notesSlice.reducer;
