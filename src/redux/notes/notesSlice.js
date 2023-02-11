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
  },
});
// export const notesActiond = notesSlice.actions; //former approach
export const { addNotes, setSearchQuery, removeNote, setSelectedColor } =
  notesSlice.actions; //new approach
export default notesSlice.reducer;
