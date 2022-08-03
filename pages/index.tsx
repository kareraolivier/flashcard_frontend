import React from "react";
import Link from "next/link";
import NavBar from "../component/navBar/navBar";
import Button from "../component/Button";
const index = () => {
  const buttonClick = () => {
    console.log("karera");
  };
  return (
    <>
      <NavBar />
      <div className="homepage">
        <div className="cardshome">
          <div className="cardimage"></div>
          <div className="cardcontent">
            <h2>
              This is the most interesting cards that can help you to advance
              your learning capability.
            </h2>
            <p>
              This is the most interesting cards that can help you to advance
              your learning capability.
            </p>
            <div className="homebutton">
              <Link href="/cards" style={{ cursor: "pointer" }}>
                <Button
                  bcolor="rgb(1, 198, 175)"
                  text="Get started"
                  onClick={buttonClick}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
