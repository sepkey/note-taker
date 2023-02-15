import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeNote, editNote } from "../redux/notes/notesSlice";
import { IoMdClose } from "react-icons/io";
import { VscEdit } from "react-icons/vsc";

const NotePiece = ({ item }) => {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [editTxt, setEditTxt] = useState(item.note);

  const handleEdit = () => {
    dispatch(editNote({ ...item, note: editTxt }));
    setOpenEdit(false);
  };

  const handleDelete = () => dispatch(removeNote(item.id));

  const handleToggle = () => setOpenEdit(!openEdit);

  return (
    <div className="note-piece" style={{ backgroundColor: item.bgColor }}>
      <div className="operation-btns">
        {openEdit && (
          <button onClick={handleEdit} className="operation-btn">
            <VscEdit size={16} />
          </button>
        )}
        <button onClick={handleDelete} className="operation-btn">
          <IoMdClose size={16} />
        </button>
      </div>
      {openEdit ? (
        <textarea
          className="note-editable"
          value={editTxt}
          onChange={(e) => setEditTxt(e.target.value)}
        ></textarea>
      ) : (
        <p className="note-content" onDoubleClick={handleToggle}>
          {item.note}
        </p>
      )}
    </div>
  );
};

export default NotePiece;
