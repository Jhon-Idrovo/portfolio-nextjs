import Link from "next/link";
import { useRouter } from "next/router";

import { es, en } from "../lib/texts";
import SocialIcons from "./SocialIcons";

function Contact({ close }) {
  const router = useRouter();
  const texts = router.locale === "es" ? es : en;
  return (
    <div className="contact-base">
      <div className="relative bg-primary flex flex-col justify-center items-center p-8">
        <button
          className="text-txt-primary text-xl absolute top-0 right-2"
          onClick={close}
        >
          x
        </button>
        <h2 className="text-txt-primary mb-4">{texts.contact}</h2>
        <div className="contact-item">
          <svg
            id="email-icon"
            className="contact-ico"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <g>
                  <path d="m415.432 52.214c-53.248 0-96.568 43.32-96.568 96.568 0 7.436.846 14.677 2.445 21.634h-303.25c-9.958.001-18.059 8.102-18.059 18.06v175.528c0 4.135 3.352 7.487 7.487 7.487s7.487-3.352 7.487-7.487v-175.528c0-1.701 1.384-3.085 3.085-3.085h.819l140.649 148.721-140.027 110.699h-1.441c-1.701 0-3.085-1.384-3.085-3.085v-43.17c0-4.135-3.352-7.487-7.487-7.487s-7.487 3.352-7.487 7.487v43.17c0 9.958 8.101 18.059 18.059 18.059h392.104c9.958 0 18.059-8.101 18.059-18.059v-197.224c47.224-6.277 83.778-46.808 83.778-95.72 0-53.248-43.32-96.568-96.568-96.568zm-375.944 133.177h286.59c5.991 14.57 15.456 27.352 27.344 37.338l-139.286 147.28c-.017.003-.033.002-.049 0zm4.158 259.42 126.21-99.777 33.862 35.805c.209.22.43.428.663.622 2.819 2.335 6.273 3.502 9.729 3.502 3.455 0 6.911-1.168 9.729-3.502.233-.194.455-.401.664-.622l33.862-35.805 126.21 99.777zm369.602-3.085c0 1.701-1.384 3.085-3.085 3.085h-1.441l-140.027-110.699 97.016-102.583c13.949 8.414 30.183 13.407 47.537 13.794zm2.184-211.35c-44.991 0-81.594-36.602-81.594-81.594 0-44.991 36.603-81.593 81.594-81.593s81.594 36.603 81.594 81.593c0 44.991-36.603 81.594-81.594 81.594z" />
                  <path d="m459.359 102.661c-1.429-.467-3.006-.469-4.422.038-.372.133-86.923 31.117-86.923 31.117-5.247 1.878-9.006 6.471-9.808 11.986-.803 5.515 1.49 10.989 5.984 14.285l24.766 18.167 18.167 24.766c2.86 3.9 7.361 6.142 12.105 6.142 6.278 0 12.039-4.033 14.166-9.966 0-.001 3.723-10.387 3.723-10.387 1.41-3.887-.599-8.181-4.486-9.591-3.886-1.409-8.181.6-9.591 4.486l-3.733 10.466c-.024.014-.084.023-.108-.007l-15.048-20.514 35.022-35.022-4.539 12.681c-1.394 3.893.632 8.179 4.525 9.572 3.895 1.395 8.18-.633 9.573-4.525 0 0 15.898-44.433 15.945-44.611.377-1.429.256-2.954-.292-4.333-.887-2.224-2.767-4.012-5.026-4.75zm-65.801 60.401-20.535-15.047c-.007-.027.002-.088.037-.102l55.522-19.876z" />
                </g>
              </g>
            </g>
          </svg>
          <Link href="mailto: jhonidrovo3@gmail.com">
            <a className=" CTA">{texts.sendEmail}</a>
          </Link>
        </div>
        <div className="contact-item">
          <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1">
              <g id="003---Call" fill-rule="nonzero" transform="translate(-1)">
                <path
                  id="Shape"
                  d="m25.017 33.983c-5.536-5.536-6.786-11.072-7.068-13.29-.0787994-.6132828.1322481-1.2283144.571-1.664l4.48-4.478c.6590136-.6586066.7759629-1.685024.282-2.475l-7.133-11.076c-.5464837-.87475134-1.6685624-1.19045777-2.591-.729l-11.451 5.393c-.74594117.367308-1.18469338 1.15985405-1.1 1.987.6 5.7 3.085 19.712 16.855 33.483s27.78 16.255 33.483 16.855c.827146.0846934 1.619692-.3540588 1.987-1.1l5.393-11.451c.4597307-.9204474.146114-2.0395184-.725-2.587l-11.076-7.131c-.7895259-.4944789-1.8158967-.3783642-2.475.28l-4.478 4.48c-.4356856.4387519-1.0507172.6497994-1.664.571-2.218-.282-7.754-1.532-13.29-7.068z"
                />
                <path
                  id="Shape"
                  d="m47 31c-1.1045695 0-2-.8954305-2-2-.0093685-8.2803876-6.7196124-14.9906315-15-15-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c10.4886126.0115735 18.9884265 8.5113874 19 19 0 1.1045695-.8954305 2-2 2z"
                />
                <path
                  id="Shape"
                  d="m57 31c-1.1045695 0-2-.8954305-2-2-.0154309-13.800722-11.199278-24.9845691-25-25-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c16.008947.01763587 28.9823641 12.991053 29 29 0 .530433-.2107137 1.0391408-.5857864 1.4142136-.3750728.3750727-.8837806.5857864-1.4142136.5857864z"
                />
              </g>
            </g>
          </svg>
          <Link href="tel:+593-0961301416">
            <a className="CTA">{texts.call}</a>
          </Link>
        </div>
        {/* <Link href="">
        <a>Reach on Twitter</a>
</Link> */}
        <SocialIcons />
      </div>
    </div>
  );
}

export default Contact;
