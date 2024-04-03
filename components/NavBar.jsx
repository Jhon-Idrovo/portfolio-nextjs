import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { es, en } from "../lib/texts";

function NavBar() {
  const router = useRouter();
  const { locale } = router;
  const texts = locale === "en" ? en : es;

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <Link href="/" legacyBehavior>
        <a className="nav-logo">
          <svg
            id="sign"
            width="479"
            height="202"
            viewBox="0 0 479 202"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                id="bottom"
                d="M221.749 81.394C207.754 103.806 193.166 122.231 172.797 139.174C155.514 153.549 136.402 166.568 115.017 173.86C96.4903 180.177 76.5372 185.409 56.7909 182.776C44.149 181.091 24.6161 176.814 19.3409 163.249C14.7089 151.338 30.8246 145.621 39.2251 143.588C63.9652 137.598 88.5813 134.136 114.036 133.244C157.074 131.737 200.277 133.375 243.327 133.601C297.227 133.884 350.842 133.469 404.719 131.951"
                stroke="#FF8811"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="top"
                d="M131.067 69.3565C168.523 73.3697 206.012 76.4123 243.595 78.9865C295.754 82.559 346.747 80.5655 398.299 71.764"
                stroke="#FF8811"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="inner"
                d="M192.057 135.964C206.353 110.494 220.688 85.0509 236.997 60.7965C248.945 43.0276 261.927 25.2263 272.262 6.49404C272.904 5.32962 276.078 1.02113 275.427 5.5132C274.426 12.4196 268.303 20.6889 265.262 26.9132C260.881 35.882 258.087 45.4542 253.804 54.4657C248.271 66.1085 242.537 77.6239 236.774 89.1514C230.737 101.225 225.251 113.458 217.737 124.729C217.416 125.209 213.77 129.036 214.348 127.716C216.391 123.046 219.641 118.275 222.239 113.895C226.138 107.324 232.198 101.798 237.175 96.0173C242.636 89.6733 248.872 84.3458 256.346 80.5023C259.876 78.6865 270.312 72.7338 271.459 80.1902C272.676 88.0987 266.236 96.1477 262.766 102.616C258.807 109.992 253.849 119.736 253.849 128.296C253.849 136.051 255.986 131.562 259.779 126.78C263.059 122.644 266.362 117.916 268.918 113.316C272.764 106.394 277.32 101.132 281.847 94.769C292.988 79.111 311.386 75.9406 324.915 90.2215C327.178 92.6104 322.953 90.091 322.374 89.731C317.63 86.7824 313.554 84.7251 308.107 83.4002C297.605 80.8458 287.678 88.481 283.096 97.9789C279.169 106.118 274.729 121.034 279.083 129.99C283.426 138.923 295.299 139.207 301.999 133.512C313.748 123.525 330.554 96.8415 311.228 86.6102C302.66 82.0744 300.262 94.234 312.61 94.234C325.907 94.234 333.162 87.4532 344.531 81.5723C345.409 81.1184 358.158 72.7127 358.932 75.4198C359.416 77.1142 357.55 80.4878 357.015 81.929C354.583 88.4805 351.334 94.1904 347.34 99.896C342.263 107.15 337.907 114.944 333.296 122.5C331.456 125.515 328.872 134.978 327.857 131.595C326.952 128.576 331.125 122.154 332.672 119.736C337.2 112.661 342.355 105.584 347.786 99.1827C352.222 93.9549 363.31 83.8015 371.014 83.8015C375.325 83.8015 370.28 93.5671 369.81 94.6798C366.049 103.588 362.989 111.238 362.989 120.895C362.989 129.262 369.669 130.82 377.523 128.92C386.888 126.654 394.595 118.668 401.598 112.602C421.409 95.4427 439.309 76.7216 456.881 57.319"
                stroke="#FF8811"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="-4"
                y="0"
                width="487"
                height="210"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </a>
      </Link>
      <div className="nav-menu">
        <input
          type="checkbox"
          value={isNavOpen}
          onChange={() => setIsNavOpen((prev) => !prev)}
          checked={isNavOpen}
          id="menu-check"
        />
        <div></div>
        <ul className="nav-list">
          {texts.navMenuItems.map((item, index) => (
            <li
              key={index}
              className={`nav-menu-item ${
                router.pathname === "/" + item.ref ? "active" : ""
              }`}
            >
              <Link href={`/${item.ref}`} legacyBehavior>
                <a onClick={() => setIsNavOpen(false)}>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
