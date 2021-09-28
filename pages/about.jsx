import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { en, es } from "../lib/texts";
import Image from "next/image";
import Book from "../components/Book";
import Link from "next/link";
import { customLoader } from "../lib/utils";
import FAQ from "../components/FAQ";

function About() {
  const router = useRouter();
  const { locale } = router;
  const texts = (locale === "es" ? es : en).about;
  //const texts = en.about;
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    let height = 0;
    Object.values(texts.sections).map(({ title }) => {
      let listItem = document.getElementById(`${title}-indicator`);
      console.log(listItem, height);
      console.log(document.getElementById(encodeURI(title)));
      const scrollDistance =
        (height /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      // since ul element has a width of 0, left has no effect until we give it a width
      listItem.setAttribute(
        "style",
        `top:${scrollDistance}%; left:${scrollDistance}%`
      );
      // add the heigth of the section, this way we get the start of the next section
      height = height + document.getElementById(encodeURI(title)).scrollHeight;
    });
    const handleScroll = (e) => {
      const scrollable = height;
      const scrolled = (window.scrollY / scrollable) * 100;
      // console.log(scrollable, scrolled);
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="about">
      <div className="about-sidebar">
        <div className="sidebar-scroll">
          <div
            className="scroll-inner bg-primary w-full rounded-md"
            style={{ height: `${scrollPercent}%` }}
          ></div>
        </div>
        <ul className="flex flex-col justify-between relative">
          {Object.values(texts.sections).map((section) => (
            <li
              key={section.title}
              className="absolute text-primary-accent"
              id={`${section.title}-indicator`}
            >
              <Link href={`/about/#${encodeURI(section.title)}`}>
                <a>{section.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Intro */}
      <section
        className=" flex section"
        id={encodeURI(texts.sections.knowMe.title)}
      >
        <div className="">
          <h1 className="mb-4">{texts.sections.knowMe.title}</h1>
          <div className="about-image ">
            {/* <Image
              loader={customLoader}
              src="v1632652101/portfolio/me-red_x4qkvm"
              layout="fill"
              objectFit="contain"
              priority="true"
              sizes={
                "(max-width:640px) 455px,(max-width:750px) 539px, (max-width:828px) 600px, (max-width:1080px) 609px, (max-width:1200px) 679px, 859px"
              }
            /> */}
            <img
              src={customLoader({
                src: "v1632652101/portfolio/me-red_x4qkvm",
                width: 700,
                quality: 100,
              })}
              alt=""
            />
          </div>

          <p
            className=" mx-auto text-justify"
            dangerouslySetInnerHTML={{ __html: texts.sections.knowMe.content }}
          ></p>
        </div>
      </section>
      <section
        className="schooling mt-12 section"
        id={encodeURI(texts.sections.schooling.title)}
      >
        <h1 className=" section-header">{texts.sections.schooling.title}</h1>
        <h2 className="about-subheader">
          {texts.sections.schooling.content.books.tittle}
        </h2>
        <p className="mt-6">
          {texts.sections.schooling.content.books.description}
        </p>
        <div className="quote mt-6 mb-12 w-2/3 mx-auto">
          <em className="">
            {texts.sections.schooling.content.books.quote.text}
          </em>
          <br />
          <em>-{texts.sections.schooling.content.books.quote.author}</em>
        </div>
        <div className="books-list">
          {texts.sections.schooling.content.books.booksList.map((book) => (
            <Book key={book.name} {...book} />
          ))}
        </div>
      </section>
      <section
        id={encodeURI(texts.sections.strengths.title)}
        className="section"
      >
        <h1 className="section-header">{texts.sections.strengths.title}</h1>
        <h2 className="about-subheader">
          {texts.sections.strengths.content.strengths.title}
        </h2>
        {texts.sections.strengths.content.strengths.strengthsList.map(
          ({ title, description }) => (
            <div key={title} className="strenghts">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          )
        )}
        <h2 className="about-subheader">
          {texts.sections.strengths.content.weaknesses.tittle}
        </h2>
        {texts.sections.strengths.content.weaknesses.weaknessesList.map(
          ({ tittle, description }) => (
            <div key={tittle} className="strenghts">
              <h4>{tittle}</h4>
              <p>{description}</p>
            </div>
          )
        )}
      </section>
      <section className="section" id="FAQ">
        <h1 className="section-header">FAQ</h1>
        {texts.sections.faq.faqsList.map((el, index) => (
          <FAQ key={index} {...el} />
        ))}
      </section>
    </div>
  );
}

export default About;
