import Link from "next/link";
import { useRouter } from "next/router";

import { es, en } from "../lib/texts";

function MobileFooter({ openContact }) {
  const router = useRouter();
  const { locale } = router;
  const texts = locale === "en" ? en : es;
  return (
    <footer className="w-screen bg-primary fixed bottom-0 right-0 left-0">
      <nav className="footer-nav">
        <ul className="mx-auto flex">
          <li className="footer-item">
            <Link href="/#portfolio" legacyBehavior>
              <a>{texts.footerNavIndex}</a>
            </Link>
          </li>
          <li className="footer-item">
            <Link href="/about" legacyBehavior>
              <a>{texts.footerNavIndex1}</a>
            </Link>
          </li>
          <li className="footer-item" legacyBehavior>
            <Link href="/#contact">
              <a onClick={openContact}>{texts.footerNavIndex2}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default MobileFooter;
