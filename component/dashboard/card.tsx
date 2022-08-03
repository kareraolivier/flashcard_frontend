import React from "react";
import Button from "../Button";
const card = () => {
  const buttonClick = () => {
    return console.log("clicked");
  };
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
            <tr>
              <th>Category</th>
              <th>
                <tr>
                  <th>Question</th>
                  <th>Answers</th>
                </tr>
              </th>
            </tr>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                  </tr>
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
