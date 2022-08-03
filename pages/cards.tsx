import { useRef } from "react";
import Link from "next/link";
import Button from "../component/Button";
import NavBar from "../component/navBar/navBar";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { TiChevronRight } from "react-icons/ti";
const Cards = () => {
  const refers = useRef();
  const buttonClick = () => {
    console.log("karera");
  };
  return (
    <>
      <NavBar />
      <div className="allcards">
        <div className="button">
          <Link href="./dashboard">
            <Button
              bcolor="rgb(1, 198, 175)"
              text="Dashboard"
              onClick={buttonClick}
            />
          </Link>
        </div>

        <div className="allcardform">
          <div className="category">
            <h3>Categories:</h3>
            <ul>
              <li>maths</li>
              <li>maths</li>
              <li>maths</li>
              <li>maths</li>
              <li>maths</li>
            </ul>
          </div>
          <div className="card">
            <div className="fliponecard">
              <Flippy
                className="cardflip"
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                refers={refers}
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
    </>
  );
};

export default Cards;
