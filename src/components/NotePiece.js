import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../redux/notes/notesSlice";
import { editNote } from "../redux/notes/notesSlice";
import { IoMdClose } from "react-icons/io";
import { VscEdit } from "react-icons/vsc";

const NotePiece = ({ item }) => {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [editTxt, setEditTxt] = useState(item.note);
  console.log(item);

  const handleEdit = function () {
    dispatch(editNote({ ...item, note: editTxt }));
    setOpenEdit(false);
  };
  return (
    <div
      className="note-piece"
      style={{ backgroundColor: item.bgColor }}
      onClick={(e) => console.log("log0---", e)}
    >
      <div className="operation-btns">
        {openEdit && (
          <button onClick={handleEdit} className="operation-btn">
            <VscEdit size={16} />
          </button>
        )}
        <button
          onClick={() => dispatch(removeNote(item.id))}
          className="operation-btn"
        >
          <IoMdClose size={16} />
        </button>
      </div>
      {openEdit ? (
        <textarea
          className="note-editable"
          value={editTxt}
          onChange={(e) => {
            setEditTxt(e.target.value);
          }}
        ></textarea>
      ) : (
        <p className="note-content" onDoubleClick={setOpenEdit}>
          {item.note}
        </p>
      )}
    </div>
  );
};

export default NotePiece;
