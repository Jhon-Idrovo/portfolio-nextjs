import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

import "../styles/global.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* AOS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>

      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
