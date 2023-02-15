import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes } from "../redux/notes/notesSlice";
import { setSearchQuery } from "../redux/notes/notesSlice";
import { nanoid } from "nanoid";
import ColorButtons from "./ColorButtons";

const Note = () => {
  //local state
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#FFFDDE");
  //global state
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleSubmit = function () {
    if (!text) {
      alert("Note is empty, Enter something!");
      return;
    }
    const existedNote = items.find((i) => i.note === text);
    if (existedNote) {
      alert("This note is already exists!");
      return;
    }

    dispatch(addNotes({ id: nanoid(5), note: text, bgColor }));
    setText("");
  };

  return (
    <div className="paper-stack">
      <textarea
        className="paper-content"
        placeholder="Enter your note..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          dispatch(setSearchQuery(""));
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ColorButtons bgColor={bgColor} setBgColor={setBgColor} />
        <button type="submit" className="btn-add" onClick={handleSubmit}>
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Note;
