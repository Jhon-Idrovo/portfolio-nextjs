import Image from "next/image";

function BnftsCard({ benefit, index, CTA, children }) {
  return (
    <div className="bnft-container">
      <h4 className="bnft-title">{benefit.title}</h4>
      <p className="bnft-text">{benefit.desc}</p>
      {benefit.exSrc ? (
        <div className="bnft-ex ">
          <Image
            src={benefit.exSrc}
            alt={"ers"}
            layout="fill"
            objectFit="scale-down"
          />
        </div>
      ) : null}
      {children}
      <button className="CTA bnft-btn">{CTA}</button>
    </div>
  );
}

export default BnftsCard;
