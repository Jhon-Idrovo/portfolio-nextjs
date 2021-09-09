import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { en, es } from "../lib/texts";
import Image from "next/image";
import Book from "../components/Book";
import Link from "next/link";
function About() {
  const router = useRouter();
  const { locale } = router;
  //const texts = locale === "en" ? en : es;
  const texts = en.about;
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
          <div className="about-image ">
            <Image src="/images/me-red.png" layout="fill" objectFit="contain" />
          </div>
          <h1 className="section-header">Know Me</h1>

          <p className=" mx-auto text-justify">
            Hi! I'm Jhon Idrovo. I'm a passionate web developer searching to
            help you with my capabilities.
            <br />
            I love reading,that's how I collected most of my knowledge. And
            that's why I'm what's considered a selft thaugth. Althoug I don't
            completely agree with that, since I've had the help of a lot of
            people that has written incredible books, articles and other
            resources. You can check all the books I've used through my journey
            on the books section.
            <br />
            I'm an avid learner. I have to admit that sometimes I have projects
            where I don't know a technology works or something similar. But that
            has never stopped me. I've reached a point where I have my own
            methodology for learning and using that knowledge to solve the
            problem at hand. That in fact, is a motivation for me, since I get
            the chance to stay at the top of the knowledge in my field and
            sharpen my habilities.
            <br />
            My hunger for success and new adventures has led me to study
            Economics and Business Administration. Knowledge that now combine
            with programming. This brings me a different point of view when
            facing problems in eaither of those areas.
            <br />
            Now, I'm workning through freelance, and try to meet like minded
            people. But also I'm planning to join/create a startup in the
            future.
          </p>
        </div>
      </section>
      <section
        className="schooling mt-12 section"
        id={encodeURI(texts.sections.schooling.title)}
      >
        <h1 className=" section-header">{texts.sections.schooling.title}</h1>
        <h2>{texts.sections.schooling.content.books.tittle}</h2>
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
            <Book {...book} />
          ))}
        </div>
      </section>
      <section
        id={encodeURI(texts.sections.strengths.title)}
        className="section"
      >
        <h1 className="section-header">{texts.sections.strengths.title}</h1>
        <h2>{texts.sections.strengths.content.strengths.title}</h2>
        {texts.sections.strengths.content.strengths.strengthsList.map(
          ({ title, description }) => (
            <div key={title} className="strenghts">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          )
        )}
        <h2>{texts.sections.strengths.content.weaknesses.tittle}</h2>
        {texts.sections.strengths.content.weaknesses.weaknessesList.map(
          ({ tittle, description }) => (
            <div key={tittle} className="strenghts">
              <h4>{tittle}</h4>
              <p>{description}</p>
            </div>
          )
        )}
      </section>
    </div>
  );
}

export default About;
