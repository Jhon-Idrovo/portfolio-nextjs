import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";

import "../styles/global.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MobileFooter from "../components/MobileFooter";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Web developer that will build your website to fit your needs. All the functionality you need. No templates."
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* AOS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* Fonts Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <NavBar />
      <Component openContact={openContact} {...pageProps} />
      {isContactOpen ? <Contact close={closeContact} /> : null}
      <Footer></Footer>
      <MobileFooter openContact={openContact} />
    </>
  );
}
