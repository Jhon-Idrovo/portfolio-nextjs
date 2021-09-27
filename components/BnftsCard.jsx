import Image from "next/image";
import { customLoader } from "../lib/utils";

function BnftsCard({ benefit, index, CTA, children }) {
  return (
    <div
      className="bnft-container"
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-anchor-placement="center-bottom"
    >
      <h4 className="bnft-title">{benefit.title}</h4>
      <p className="bnft-text">{benefit.desc}</p>
      {benefit.exSrc ? (
        <div className="bnft-ex ">
          <Image
            loader={customLoader}
            src={benefit.exSrc}
            alt={"ers"}
            layout="fill"
            // preload the image
            priority={true}
            objectFit="scale-down"
          />
        </div>
      ) : null}
      {children}
      <button className="CTA bnft-btn" onClick={CTA.action}>
        {CTA.t}
      </button>
    </div>
  );
}

export default BnftsCard;
