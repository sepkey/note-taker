import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/notes/notesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery);

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <div>
      <input
        value={searchQuery}
        onChange={handleChange}
        type="text"
        className="search-box"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
