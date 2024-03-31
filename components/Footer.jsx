import Link from "next/link";
import SocialIcons from "./SocialIcons";
function Footer() {
  return (
    <>
      <svg
        className="separator-dark-to-ligth"
        viewBox="0 0 1166 227"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 64L27.8544 59.3C55.7089 54.7 111.418 45.3 166.868 36.3C222.447 27.2999 277.638 18.7 333.217 12.5C388.667 6.29996 444.376 2.69995 499.825 1.29995C555.405 -5.27255e-05 610.595 0.999972 666.175 6.69997C721.624 12.3 777.333 22.7 832.783 29.3C888.362 36 943.553 39 999.132 38.8C1054.58 38.7 1110.29 35.3 1138.15 33.7L1166 32V228H1138.15C1110.29 228 1054.58 228 999.132 228C943.553 228 888.362 228 832.783 228C777.333 228 721.624 228 666.175 228C610.595 228 555.405 228 499.825 228C444.376 228 388.667 228 333.217 228C277.638 228 222.447 228 166.868 228C111.418 228 55.7089 228 27.8544 228H0V64Z"
          fill="#1D3557"
        />
        <path
          d="M0 87L27.8544 78C55.7089 69 111.418 51 166.868 43.8C222.447 36.7 277.638 40.3 333.217 40.2C388.667 40 444.376 36 499.825 40.3C555.405 44.7 610.595 57.3 666.175 66.3C721.624 75.3 777.333 80.7 832.783 86.2C888.362 91.7 943.553 97.3 999.132 94.2C1054.58 91 1110.29 79 1138.15 73L1166 67V228H1138.15C1110.29 228 1054.58 228 999.132 228C943.553 228 888.362 228 832.783 228C777.333 228 721.624 228 666.175 228C610.595 228 555.405 228 499.825 228C444.376 228 388.667 228 333.217 228C277.638 228 222.447 228 166.868 228C111.418 228 55.7089 228 27.8544 228H0V87Z"
          fill="#335C7A"
        />
        <path
          d="M0 99.9999L27.8544 102.5C55.7089 105 111.418 110 166.868 104.7C222.447 99.3 277.638 83.7 333.217 80.2C388.667 76.7 444.376 85.2999 499.825 86.2999C555.405 87.2999 610.595 80.6999 666.175 76.4999C721.624 72.2999 777.333 70.7 832.783 70.7C888.362 70.7 943.553 72.2999 999.132 73.2999C1054.58 74.2999 1110.29 74.6999 1138.15 74.7999L1166 74.9999V228H1138.15C1110.29 228 1054.58 228 999.132 228C943.553 228 888.362 228 832.783 228C777.333 228 721.624 228 666.175 228C610.595 228 555.405 228 499.825 228C444.376 228 388.667 228 333.217 228C277.638 228 222.447 228 166.868 228C111.418 228 55.7089 228 27.8544 228H0V99.9999Z"
          fill="#53859B"
        />
        <path
          d="M0 163L27.8544 160.7C55.7089 158.3 111.418 153.7 166.868 145.8C222.447 138 277.638 127 333.217 123.8C388.667 120.7 444.376 125.3 499.825 132.2C555.405 139 610.595 148 666.175 146.8C721.624 145.7 777.333 134.3 832.783 135C888.362 135.7 943.553 148.3 999.132 149.2C1054.58 150 1110.29 139 1138.15 133.5L1166 128V228H1138.15C1110.29 228 1054.58 228 999.132 228C943.553 228 888.362 228 832.783 228C777.333 228 721.624 228 666.175 228C610.595 228 555.405 228 499.825 228C444.376 228 388.667 228 333.217 228C277.638 228 222.447 228 166.868 228C111.418 228 55.7089 228 27.8544 228H0V163Z"
          fill="#7BAFBB"
        />
        <path
          d="M0 168L27.8544 166.7C55.7089 165.3 111.418 162.7 166.868 161.2C222.447 159.7 277.638 159.3 333.217 157.8C388.667 156.3 444.376 153.7 499.825 153.7C555.405 153.7 610.595 156.3 666.175 163.7C721.624 171 777.333 183 832.783 189.5C888.362 196 943.553 197 999.132 192.5C1054.58 188 1110.29 178 1138.15 173L1166 168V228H1138.15C1110.29 228 1054.58 228 999.132 228C943.553 228 888.362 228 832.783 228C777.333 228 721.624 228 666.175 228C610.595 228 555.405 228 499.825 228C444.376 228 388.667 228 333.217 228C277.638 228 222.447 228 166.868 228C111.418 228 55.7089 228 27.8544 228H0V168Z"
          fill="#A8DADC"
        />
      </svg>
      <div className="main-footer">
        <SocialIcons />
        <p className="text-txt-primary w-min whitespace-nowrap mx-auto text-sm font-thin">
          Jhon Idrovo - 2021
        </p>
      </div>
    </>
  );
}

export default Footer;
