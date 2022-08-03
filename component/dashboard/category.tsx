import React from "react";
import Button from "../Button";

const category = () => {
  const buttonClick = () => {
    return console.log("clicked");
  };

  return (
    <div>
      <div className="category">
        <div className="input">
          <input
            type="text"
            name="category"
            id="CategoryText"
            placeholder="Category"
          />
          <Button
            bcolor="rgb(1, 198, 175)"
            text="Add Category"
            onClick={buttonClick}
          />
        </div>
        <ul>
          <li>Math</li>
          <li>Math</li>
          <li>Math</li>
          <li>Math</li>
          <li>Math</li>
        </ul>
      </div>
    </div>
  );
};

export default category;
