import { useRouter } from "next/router";
import { en, es } from "../lib/texts";

export const useI18nTexts = () => {
  const router = useRouter();
  const { locale } = router;
  if (locale === "es") return es;
  return en;
};
