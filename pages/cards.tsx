import Link from "next/link";
import Button from "../component/Button";
import NavBar from "../component/navBar/navBar";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { TiChevronRight } from "react-icons/ti";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "./api/api";

const Cards = () => {
  const { loading, error, data } = useQuery(GET_CATEGORY);
  if (loading) return <p>loading ..</p>;
  if (error) return <p>error ..</p>;

  const buttonClick = () => {
    console.log("karera");
  };
  return (
    <>
      <NavBar />
      {!loading && !error && (
        <div className="allcards">
          <div className="button">
            <Link href="./dashboard" passHref>
              <a>
                <Button
                  bcolor="rgb(1, 198, 175)"
                  text="Dashboard"
                  onClick={buttonClick}
                />
              </a>
            </Link>
          </div>

          <div className="allcardform">
            <div className="category">
              <h3>Categories:</h3>

              {data.allCategorys.map((category) => (
                <ul key={category.id}>
                  <li>{category.name}</li>
                </ul>
              ))}
            </div>
            <div className="card">
              <div className="fliponecard">
                <Flippy
                  className="cardflip"
                  flipOnHover={false}
                  flipOnClick={true}
                  flipDirection="horizontal"
                >
                  <FrontSide className="cardfrontside">RICK</FrontSide>
                  <BackSide className="cardbackside">ROCKS</BackSide>
                </Flippy>
              </div>
              <div className="icon">
                <TiChevronRight className="iconone" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
