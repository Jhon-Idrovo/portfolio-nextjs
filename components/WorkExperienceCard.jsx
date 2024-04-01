function WorkExperienceCard({ workplace, duration, positions }) {
  return (
    <div className="w-full">
      <h4>{workplace}</h4>
      <h5>Full-Time | {duration}</h5>
      {positions.map((p) => (
        <div className="ml-8 mt-4">
          <h6>{p.position}</h6>
          <p>
            <p>Responsabilities:</p>
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
