import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { en, es } from "../lib/texts";
import Image from "next/image";
import Book from "../components/Book";
function About() {
  const router = useRouter();
  const { locale } = router;
  //const texts = locale === "en" ? en : es;
  const texts = en.about;
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    const handleScroll = (e) => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollable) * 100;
      // console.log(scrollable, scrolled);
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    let height = 0;
    Object.values(texts.sections).map(({ title }) => {
      let listItem = document.getElementById(`${title}-indicator`);
      console.log(listItem, height);
      console.log(document.getElementById(title));
      const scrollDistance =
        (height /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      listItem.setAttribute("style", `top:${scrollDistance}%`);
      // add the heigth of the section, this way we get the start of the next section
      height = height + document.getElementById(title).scrollHeight;
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="text-txt-base max-w-5xl mx-auto mt-12">
      <div className="fixed left-0 flex ">
        <div className="ml-8 mr-2 " style={{ height: "75vh", width: "20px" }}>
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
              {section.title}
            </li>
          ))}
        </ul>
      </div>
      {/* Intro */}
      <section className=" flex section" id={texts.sections.knowMe.title}>
        <div className="w-1/2">
          <h1 className="section-header">Know Me</h1>

          <p className=" mx-auto">
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
        <div className="relative w-1/2">
          <Image src="/images/me2.png" layout="fill" objectFit="contain" />
        </div>
      </section>
      <section
        className="schooling mt-12 section"
        id={texts.sections.schooling.title}
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
      <section id={texts.sections.strengths.title} className="section">
        <h1 className="section-header">{texts.sections.strengths.title}</h1>
        <h2>{texts.sections.strengths.content.strengths.title}</h2>
        {texts.sections.strengths.content.strengths.strengthsList.map(
          ({ title, description }) => (
            <div className="strenghts">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          )
        )}
        <h2>{texts.sections.strengths.content.weaknesses.tittle}</h2>
        {texts.sections.strengths.content.weaknesses.weaknessesList.map(
          ({ tittle, description }) => (
            <div className="strenghts">
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
