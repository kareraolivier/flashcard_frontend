import React from "react";
const Button = ({ bcolor, text, onClick }) => {
  return (
    <button
      style={{
        marginTop: "0",
        width: "13rem",
        height: "3rem",
        fontSize: "20px",
        cursor: "pointer",
        border: "solid rgb(1, 198, 175)",
        borderRadius: "5px",
        color: "white",
        backgroundColor: bcolor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
