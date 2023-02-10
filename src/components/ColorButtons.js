import React from "react";

const ColorButtons = ({ bgColor, setBgColor }) => {
  const colors = [
    "#FFFDDE",
    "#D9D7F1",
    "#e6fa9d",
    "#FFCBCB",
    "#DEEDF0",
    "#FFDCA9",
  ];

  const handleClick = function (e) {
    setBgColor(e.target.value);
  };
  return (
    <div className="colors">
      {colors.map((c, idx) => (
        <button
          key={idx}
          className={`btn-color ${c === bgColor && "btn-active"}`}
          value={c}
          style={{ backgroundColor: c }}
          onClick={handleClick}
        ></button>
      ))}
    </div>
  );
};

export default ColorButtons;
// {
//
//   /* <div className="colors">
//         <div className="pen-color" style={{ backgroundColor: "#0c9d9d" }}></div>
//         <div className="pen-color" style={{ backgroundColor: "#a30177" }}></div>
//         <div className="pen-color" style={{ backgroundColor: "#f35101" }}></div>
//         <div className="pen-color" style={{ backgroundColor: "#7aa9d8" }}></div>
//       </div> */
// }
