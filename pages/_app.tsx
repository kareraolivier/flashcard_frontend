import "../styles/globals.css";
import "../component/navBar/navbar.scss";
import "../styles/homepage.scss";
import "../styles/Home.module.scss";
import "../styles/cards.scss";
import "../component/dashboard/cardcategory.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
