import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Card from "../components/Card";
import BnftsCard from "../components/BnftsCard";
import FAQ from "../components/FAQ";
import { es, en } from "../lib/texts";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const texts = locale === "en" ? en : es;
  return (
    <>
      <Head>
        <title>B.E.</title>
      </Head>
      <section className="hero mx-4 mb-24 relative flex flex-col justify-items-start content-end overflow-hidden">
        <div className="absolute top-0 -right-8 left-1/4 bottom-1/4">
          <Image
            src="/images/me-square.png"
            alt="Portrait"
            layout="responsive"
            width="9"
            height="9"
            quality="100"
          />
        </div>
        <h1 className=" hero-header text-txt-base w-1/2 z-10 ">
          {texts.indexHero}
        </h1>
        <p className="hero-subheader text-txt-base w-1/2 z-10 mt-4">
          {texts.indexHeroSubheader}
        </p>
        <button className="CTA w-max self-start mt-10 z-10">
          {texts.contactMe}
        </button>
      </section>
      <section className="section">
        {texts.benefits.map((benefit, index) => (
          <BnftsCard
            benefit={benefit}
            key={index}
            i={index}
            CTA={texts.contactMe}
          />
        ))}
      </section>
      <section className="bg-base py-6">
        <h1 className="text-txt-base text-center mb-4">{texts.myWork}</h1>

        <div className="whitespace-nowrap overflow-x-scroll">
          <span className="slide-img">
            <Image
              src="/images/my-work/craftsman-s.jpeg"
              alt="cratsman e-commerce"
              quality="100"
              layout="responsive"
              width="175"
              height="300"
            />
          </span>
          <span className="slide-img">
            <Image
              src="/images/my-work/craftsman-s.jpeg"
              alt="cratsman e-commerce"
              quality="100"
              layout="responsive"
              width="175"
              height="300"
            />
          </span>
          <span className="slide-img">
            <Image
              src="/images/my-work/craftsman-s.jpeg"
              alt="cratsman e-commerce"
              quality="100"
              layout="responsive"
              width="175"
              height="300"
            />
          </span>
          <span className="slide-img">
            <Image
              src="/images/my-work/craftsman-s.jpeg"
              alt="cratsman e-commerce"
              quality="100"
              layout="responsive"
              width="175"
              height="300"
            />
          </span>
          <span className="slide-img">
            <Image
              src="/images/my-work/craftsman-s.jpeg"
              alt="cratsman e-commerce"
              quality="100"
              layout="responsive"
              width="175"
              height="300"
            />
          </span>
          <span className="slide-img">
            <Image
              src="/images/my-work/craftsman-s.jpeg"
              alt="cratsman e-commerce"
              quality="100"
              layout="responsive"
              width="175"
              height="300"
            />
          </span>
          <span className="slide-img">
            <Image
              src="/images/my-work/craftsman-s.jpeg"
              alt="cratsman e-commerce"
              quality="100"
              layout="responsive"
              width="175"
              height="300"
            />
          </span>
        </div>
        <button className="CTA mt-CTA text-primary mx-auto table">
          {texts.viewAllMyWork}
        </button>
      </section>
      <section className="section" id="benefits">
        <h1 className="text-txt-base mx-auto w-min">
          {texts.navMenuItems[2].text}
        </h1>
        {texts.services.map((service, index) => (
          <BnftsCard
            benefit={service}
            CTA={texts.contactMe}
            index={index}
            key={index}
          >
            {service.node}
          </BnftsCard>
        ))}
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
