import React from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../redux/notes/notesSlice";
import { IoMdClose } from "react-icons/io";

const NotePiece = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className="note-piece" style={{ backgroundColor: note.bgColor }}>
      <button
        onClick={() => dispatch(removeNote(note.id))}
        className="btn-close"
      >
        <IoMdClose size={16} />
      </button>
      {note.note}
    </div>
  );
};

export default NotePiece;
