import React from "react";

const NotePiece = ({ note }) => {
  return (
    <div className="note-piece" style={{ backgroundColor: note.bgColor }}>
      {note.note}
    </div>
  );
};

export default NotePiece;
