import { useI18nTexts } from "../hooks/usei18n";

function WorkExperienceCard({ workplace, duration, positions }) {
  const texts = useI18nTexts();
  return (
    <div className="w-full m-8">
      <h4 className="text-secondary-accent">{workplace}</h4>
      <h5>Full-Time | {duration}</h5>
      {positions.map((p, i) => (
        <div className="ml-8 mt-4" key={i}>
          <h6 className="text-primary">{p.position}</h6>
          <p>
            <p>{texts.responsabilities}</p>
            <ul>
              {p.responsabilities.map((r) => (
                <li className="list-disc list-inside">{r}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
}
export default WorkExperienceCard;

export async function getStaticProps(context) {
  // Fetch data at build time
  return {
    props: {}, // will be passed to the page component as props
  };
}
