import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/notes/notesSlice";
import { setSelectedColor } from "../redux/notes/notesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery);
  const selectedColor = useSelector((state) => state.selectedColor);
  // console.log("-------", selectedColor);
  const colors = [
    "#fffdde",
    "#d9d7f1",
    "#e6fa9d",
    "#ffcbcb",
    "#deedf0",
    "#ffdca9",
  ];

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <select
        name="filter"
        title="filter"
        className="filter"
        onChange={(e) => dispatch(setSelectedColor(e.target.value))}
        value={selectedColor}
        style={{
          backgroundColor: selectedColor,
        }}
      >
        <option value="" style={{ backgroundColor: "#fff" }}></option>
        {colors.map((c, idx) => (
          <option value={c} key={idx} style={{ backgroundColor: c }}>
            {/* {c} */}
          </option>
        ))}
      </select>
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
