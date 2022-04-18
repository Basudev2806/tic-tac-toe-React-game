import React from "react";

function Box({ value, onClick }) {
  const style = {
    height: "50px",
    width: "50px",
    padding: 0,
    margin: "8px",
    borderRadius: "5px",
    backgroundColor: "rgb(0,0,0)",
    color: "white",
    border: 0,
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Box;
