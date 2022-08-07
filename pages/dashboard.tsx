import React from "react";
import Link from "next/link";
import Category from "../component/dashboard/category";
import Card from "../component/dashboard/card";
import NavBar from "../component/navBar/navBar";
import Button from "../component/Button";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "./api/api";

const dashboard = () => {
  const { loading, error, data } = useQuery(GET_CATEGORY);
  if (loading) return <p>loading ..</p>;
  if (error) return <p>error ..</p>;
  console.log("my new data", data);

  const buttonClick = () => {
    console.log("karera");
  };
  return (
    <div>
      <NavBar />

      {!loading && !error && (
        <div className="dashboardstyle">
          <div className="dashboardbutton">
            <Link href="/cards" passHref>
              <a>
                <Button
                  text="Go Home"
                  bcolor="rgb(1, 198, 175)"
                  onClick={buttonClick}
                />
              </a>
            </Link>
          </div>
          {data.allCategorys.map((newcategory) => {
            <Category key={newcategory.id} category={newcategory} />;
            <Card
              key={newcategory.id}
              category={newcategory}
              questionsi={newcategory}
              answersi={newcategory}
            />;
          })}
        </div>
      )}
    </div>
  );
};

export default dashboard;
