import { useRouter } from "next/router";
import { es, en } from "../../lib/texts";
function FontTester() {
  const router = useRouter();
  const { locale } = router;
  const texts = locale === "en" ? en : es;
  const work = texts.works[3];
  return (
    <main className="text-txt-base bg-base">
      <h1>{work.title}</h1>
      <ul>
        {work.keyFunctionality.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </main>
  );
}

export default FontTester;
