import React, { useEffect, useState } from "react";
import Button from "../Button";
import { BsFillTrashFill } from "react-icons/bs";
// import Category from "../Category";

const card = ({ category, questionsi, answersi }) => {
  const buttonClick = () => {
    return console.log("clicked");
  };
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div>
      <div className="dashbordcard">
        <div className="inputcard">
          <input
            type="text"
            name="question"
            id="CategoryText"
            placeholder="Category"
          />
          <input
            type="text"
            name="Answer"
            id="CategoryText"
            placeholder="Category"
          />
          <input
            type="text"
            name="Category"
            id="CategoryText"
            placeholder="Category"
          />

          <Button
            bcolor="rgb(1, 198, 175)"
            text="Add Category"
            onClick={buttonClick}
          />
        </div>
        <div className="table">
          <table id="customers">
            <thead>
              <tr>
                <th>Category</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{category.name}</td>
                <td>{questionsi.questions.question}</td>
                <td>{answersi.questions.answer}</td>
                <td>
                  <BsFillTrashFill />
                </td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>helo</td>
                <td>hero</td>
                <td>
                  <BsFillTrashFill />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default card;
