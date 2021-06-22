import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Card from "../components/Card";
import BnftsCard from "../components/BnftsCard";
import FAQ from "../components/FAQ";
import { es, en } from "../lib/texts";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import Contact from "../components/Contact";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const texts = locale === "en" ? en : es;
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => {
    setIsContactOpen(true);
  };

  return (
    <>
      {isContactOpen ? <Contact close={() => setIsContactOpen(false)} /> : null}
      <Head>
        <title>B.E.</title>
      </Head>
      <section className="hero " id="home">
        <div className="hero-img ">
          <Image
            src="/images/me-square.png"
            alt="Portrait"
            layout="responsive"
            width="9"
            height="9"
            quality="100"
          />
        </div>
        <div className="hero-content">
          <h1 className=" hero-header text-txt-base w-1/2 z-10 ">
            {texts.indexHero}
          </h1>
          <p className="hero-subheader text-txt-base w-1/2 z-10 mt-4">
            {texts.indexHeroSubheader}
          </p>
          <button className="CTA hero-btn" onClick={openContact}>
            {texts.contactMe}
          </button>
        </div>
      </section>
      <section className="section bnfts-section" id="benefits">
        <h1 className="text-txt-base text-center mb-4">{texts.whyHireMe}</h1>

        {texts.benefits.map((benefit, index) => (
          <BnftsCard
            benefit={benefit}
            key={index}
            index={index}
            CTA={{ t: texts.contactMe, action: openContact }}
          />
        ))}
      </section>
      <section className="section" id="portfolio">
        <h1 className="text-txt-base text-center mb-4">{texts.myWork}</h1>
        <div className="works">
          {texts.works.map((w, i) => (
            <WorkCard index={i} work={w} CTA={texts.seeItLive} />
          ))}
        </div>
      </section>
      <section className="section services-section" id="services">
        <h1 className="text-txt-base mx-auto w-min">
          {texts.navMenuItems[2].text}
        </h1>
        <div className="services">
          {texts.services.map((service, index) => (
            <ServiceCard
              benefit={service}
              CTA={{ t: texts.contactMe, action: openContact }}
              index={index}
              key={index}
            >
              {service.node}
            </ServiceCard>
          ))}
        </div>
      </section>
      <section className="section" id="faq">
        <h1 className="text-txt-base mx-auto w-min">FAQ</h1>
        {texts.faq.map((el) => (
          <FAQ {...el} />
        ))}
      </section>
    </>
  );
}
