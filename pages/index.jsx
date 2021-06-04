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
      <section className="mx-4 mb-24 h-full relative flex flex-col justify-items-start content-end">
        <div className="absolute top-0 right-0 left-1/2 bottom-1/2">
          <Image
            src="/images/me.jpg"
            alt="Portrait"
            layout="responsive"
            width="9"
            height="16"
            quality="100"
          />
        </div>
        <h1 className=" text-txt-base w-1/2 z-10">{texts.indexHero}</h1>
        <p className="text-txt-base w-1/2 z-10 mt-4">
          {texts.indexHeroSubheader}
        </p>
        <button className="CTA w-max self-center mt-10">
          {texts.contactMe}
        </button>
      </section>
      <section className="section">
        {texts.benefits.map((benefit, index) => (
          <BnftsCard
            benefit={benefit}
            key={index}
            i={index}
            CTA={texts.learnMore}
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
      <section className="section">
        <h1 className="text-txt-base mx-auto w-min">FAQ</h1>
        {texts.faq.map((el) => (
          <FAQ {...el} />
        ))}
      </section>
    </>
  );
}
