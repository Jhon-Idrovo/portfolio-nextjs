import Link from "next/link";
import SocialIcons from "./SocialIcons";
function Footer() {
  return (
    <div className="main-footer">
      <SocialIcons />
      <p className="text-txt-primary w-min whitespace-nowrap mx-auto text-sm font-thin">
        Jhon Idrovo - 2021
      </p>
    </div>
  );
}

export default Footer;
