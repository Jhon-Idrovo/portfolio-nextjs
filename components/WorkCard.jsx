import Image from "next/image";
import Link from "next/link";

function WorkCard({ work, index, CTA }) {
  return (
    <div
      className="work-container"
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-anchor-placement="center-bottom"
    >
      <h6 className="work-title">{work.title}</h6>

      <ul className="work-keypoints-list">
        {work.keyFunctionality.map((f) => (
          <li className="work-keypoint">{f}</li>
        ))}
      </ul>
      <div className="relative work-ex">
        <Image
          src={work.src}
          alt="Website snapshot"
          layout="fill"
          objectFit="scale-down"
          priority={true}
        />
      </div>
      <div className="mx-auto mt-4 w-min whitespace-nowrap">
        <Link href={work.href}>
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
