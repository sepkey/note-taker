import React from "react";

const Note = () => {
  return (
    <div className="paper-stack">
      <textarea placeholder="Enter your note..." />

      <div className="colors">
        <div className="pen-color" style={{ backgroundColor: "#0c9d9d" }}></div>
        <div className="pen-color" style={{ backgroundColor: "#a30177" }}></div>
        <div className="pen-color" style={{ backgroundColor: "#f35101" }}></div>
        <div className="pen-color" style={{ backgroundColor: "#7aa9d8" }}></div>
      </div>
    </div>
  );
};

export default Note;
