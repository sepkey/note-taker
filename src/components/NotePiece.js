import React from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../redux/notes/notesSlice";
import { IoMdClose } from "react-icons/io";
import { VscEdit } from "react-icons/vsc";

const NotePiece = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className="note-piece" style={{ backgroundColor: note.bgColor }}>
      <div className="operation-btns">
        <button
          onClick={() => dispatch(removeNote(note.id))}
          className="btn-close"
        >
          <VscEdit size={16} />
        </button>
        <button
          onClick={() => dispatch(removeNote(note.id))}
          className="btn-close"
        >
          <IoMdClose size={16} />
        </button>
      </div>
      {note.note}
    </div>
  );
};

export default NotePiece;
