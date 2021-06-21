function ServiceCard({ benefit, index, CTA, children }) {
  return (
    <div
      className="service"
      data-aos={
        index === 0 ? "fade-right" : index === 1 ? "fade-left" : "fade-up"
      }
      data-aos-anchor-placement="center-bottom"
    >
      <h6 className="service-title">{benefit.title}</h6>
      <p className="service-text">{benefit.desc}</p>
      {children}
      <button className="CTA service-btn">{CTA}</button>
    </div>
  );
}
export default ServiceCard;
