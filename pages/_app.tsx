import "../styles/globals.css";
import "../component/navBar/navbar.scss";
import "../styles/homepage.scss";
import "../styles/Home.module.scss";
import "../styles/cards.scss";
import "../component/dashboard/cardcategory.scss";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { client } from "../utils/client";

function MyApp({ Component, pageProps }: AppProps) {
  // const [showChild, setShowChild] = useState(false);

  // useEffect(() => {
  //   setShowChild(true);
  // }, []);
  // {
  //   !showChild && null;
  // }

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
