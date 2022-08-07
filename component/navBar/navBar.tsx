import React from "react";
import Link from "next/link";
import { images } from "../../assets";
import Image from "next/image";
const navBar = () => {
  return (
    <div className="NavBar">
      <div className="image">
        <Link href="/" passHref>
          <a>
            <Image className="image" src={images.Logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="title">
        <Link href="/cards" passHref>
          <a>
            <h1>Flashcards</h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default navBar;
