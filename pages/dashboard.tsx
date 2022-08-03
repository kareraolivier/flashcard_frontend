import React from "react";
import Link from "next/link";
import Category from "../component/dashboard/category";
import Card from "../component/dashboard/card";
import NavBar from "../component/navBar/navBar";
import Button from "../component/Button";

const dashboard = () => {
  const buttonClick = () => {
    console.log("karera");
  };
  return (
    <div>
      <NavBar />
      <div className="dashboard">
        {/* <h1>dashboard</h1> */}
        <div className="dashboardbutton">
          <Link href="/cards">
            <Button
              text="Go Home"
              bcolor="rgb(1, 198, 175)"
              onClick={buttonClick}
            />
          </Link>
        </div>
        <Category />
        <Card />
      </div>
    </div>
  );
};

export default dashboard;
