import React, { useEffect, useState } from "react";
import Button from "../Button";

const Category = ({ data }) => {
  // console.log("karera", category);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
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
        <div>
          <ul>
            {data.allCategorys.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
