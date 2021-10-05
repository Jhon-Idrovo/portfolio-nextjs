import { useRouter } from "next/router";
import { en, es } from "../lib/texts";
import BlogCard from "./BlogCard";

function Blogs() {
  const { locale } = useRouter();
  const texts = locale === "en" ? en : es;

  return (
    <section className="section blogs" id="blog">
      <h1 className="section-header text-txt-base">{texts.postsTitle}</h1>
      <div className="blogs__container">
        {" "}
        {texts.posts.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
