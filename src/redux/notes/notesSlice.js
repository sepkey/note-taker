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
  },
});

export const { addNotes, setSearchQuery } = notesSlice.actions;
export default notesSlice.reducer;
