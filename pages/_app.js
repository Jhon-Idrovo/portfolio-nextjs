import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";

import "../styles/global.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MobileFooter from "../components/MobileFooter";
import { Analytics } from "@vercel/analytics/react";

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
      </Head>

      <NavBar />
      <Component openContact={openContact} {...pageProps} />
      <Analytics />
      {isContactOpen ? <Contact close={closeContact} /> : null}
      <Footer></Footer>
      <MobileFooter openContact={openContact} />
    </>
  );
}
