import Image from "next/image";
import Link from "next/link";
import { customLoader } from "../lib/utils";

function WorkCard({ work, index, CTA }) {
  return (
    <div
      className="work-container"
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-anchor-placement="center-bottom"
    >
      <h6 className="work-title">{work.title}</h6>

      <ul className="work-keypoints-list">
        {work.keyFunctionality.map((f, i) => (
          <li key={i} className="work-keypoint">
            {f}
          </li>
        ))}
      </ul>
      <div className="relative work-ex">
        {/* <Image
          src={src}
          alt="Website snapshot"
          layout="fill"
          objectFit="scale-down"
          priority={true}
          sizes={
            "(max-width:640px) 455px,(max-width:750px) 539px, (max-width:828px) 600px, (max-width:1080px) 609px, (max-width:1200px) 679px, 859px"
          }
        /> */}
        <img
          src={customLoader({ src: work.src, width: 700, quality: 100 })}
          alt=""
        />
      </div>
      <div className="mx-auto mt-4 w-min whitespace-nowrap">
        <Link href={work.caseStudyRef}>
          <a className="CTA work-btn" target="_blank">
            {CTA}
          </a>
        </Link>
        {/* <Link href={work.caseStudyRef}>
          <a className="CTA work-btn ml-4" target="_blank">
            Case Study
          </a>
        </Link> */}
      </div>
    </div>
  );
}

export default WorkCard;
