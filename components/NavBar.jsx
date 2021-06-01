import Link from "next/link";
import { useRouter } from "next/router";

import { es, en } from "../lib/texts";

function NavBar() {
  const router = useRouter();
  const { locale } = router;
  const texts = locale === "en" ? en : es;
  return (
    <nav className="nav-bar">
      <Link href="/">
        <a className="nav-logo">Jhon I.</a>
      </Link>
      <div className="nav-menu">
        <input type="checkbox" id="menu-check" />
        <div></div>
        <ul className="nav-list">
          {texts.navMenuItems.map((item) => (
            <li>
              <Link href={`/${item.toLowerCase()}`} className="nav-menu-item">
                <a>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
