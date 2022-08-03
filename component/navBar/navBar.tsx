import React from "react";
import Link from "next/link";
import { images } from "../../assets";
import Image from "next/image";
const navBar = () => {
  return (
    <div className="NavBar">
      <div className="image">
        <Link href="/">
          <Image className="image" src={images.Logo} alt="logo" />
        </Link>
      </div>
      <div className="title">
        <Link href="/cards">
          <h1>Flashcards</h1>
        </Link>
      </div>
    </div>
  );
};

export default navBar;
