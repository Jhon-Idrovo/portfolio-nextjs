import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Card from "../components/Card";
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
      <section className="hero">
        <div className="img-bg">
          <Image
            src="/images/hero.jpg"
            alt="Header Image. Office space"
            layout="fill"
            quality="100"
            objectFit="cover"
          />
        </div>
        <h1 className="text-txt-base p-4 pb-2">{texts.indexHero}</h1>
        <p className="text-txt-base opacity-75 px-4 pb-2">
          {texts.indexHeroSubheader}
        </p>
      </section>
      <section>
        <h2 className="text-txt-base text-center">{texts.delightWith}</h2>
      </section>
      <section className="bg-base py-6">
        <div className="flex justify-between p-2">
          <h6 className="text-txt-base">{texts.myWork}</h6>
          <h6 className="text-primary">{texts.viewAllMyWork}</h6>
        </div>
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
      </section>
      <section>
        <h6 className="text-txt-base text-center">{texts.workTools}</h6>
      </section>
    </>
  );
}
