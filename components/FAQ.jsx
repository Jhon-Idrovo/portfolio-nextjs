import { useState } from "react";

function FAQ({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-4">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center border-b-2 border-primary"
      >
        <h4 className="text-primary">{q}</h4>

        <svg
          className={`faq-icon ${isOpen ? "faq-active" : null}`}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-circle-down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"
          ></path>
        </svg>
      </div>
      <p
        className={`text-txt-base text-left border-primary overflow-hidden transition-all ${
          isOpen ? "max-h-screen border-2 border-t-0 p-2" : "max-h-0"
        } `}
        dangerouslySetInnerHTML={{ __html: a }}
      ></p>
    </div>
  );
}

export default FAQ;
