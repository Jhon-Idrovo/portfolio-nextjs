import { useRouter } from "next/router";

function BlogCard({ blog }) {
  const router = useRouter();
  return (
    <article className="rounded-md bg-primary text-txt-primary p-2  relative blog m-4">
      <img className="rounded-md" src={blog.imgURL} alt={blog.title} />
      <h6
        className="mb-8 cursor-pointer mt-2"
        onClick={() => router.push(blog.postUrl)}
      >
        {blog.title}
      </h6>
      <p className="absolute bottom-2 right-2">{blog.date}</p>
    </article>
  );
}

export default BlogCard;
