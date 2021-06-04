function BnftsCard({ benefit, index, CTA }) {
  return (
    <div className={`mb-16 ${index === 0 ? "mt-0" : "mt-16"} `}>
      <h6 className="text-center justify-items-center text-primary w-2/3 mx-auto">
        {benefit.title}
      </h6>
      <p className="mt-2 border-2 border-primary text-txt-base p-2 text-center justify-center">
        {benefit.desc}
      </p>
      <button className="CTA mt-CTA table m-auto">{CTA}</button>
    </div>
  );
}

export default BnftsCard;
