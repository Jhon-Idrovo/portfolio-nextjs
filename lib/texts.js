import Image from "next/image";
import Link from "next/link";

export const en = {
  navMenuItems: ["Home", "Portfolio", "Services", "About Me", "Hire Me"],
  indexHero: "Amazing experiences for your users",
  indexHeroSubheader: "Frontend Designer",

  benefits: [
    {
      title: "Easy to use",
      desc: "Your web page will be intuitive and give the user clues to find what they want easily",
      descExtended: "Less clicks",
    },
    {
      title: "Good looking",
      desc: 'Your website will have a good combination of colors, images, animations, etc to make your user say "Woow"',
      descExtended: "",
    },
    {
      title: "Responsive - Mobile/Desktop First",
      desc: "",
      descExtended: "",
    },
  ],
  learnMore: "See More",
  myWork: "Mis Trabajos",
  viewAllMyWork: "View All My Work",
  faq: [
    {
      q: "¿Cuanto tiempo se tarda?",
      a: "Depende totalmente de lo que tu caso necesite, como mencione al inicio, este es un trabajo personalizado, asi que cada caso es diferente.",
    },
    { q: "¿Cuanto me costará?", a: "Mucho xd" },
  ],
  services: [
    {
      title: "Desarroll a partir de diseño",
      desc: "Tienes ya un diseño de como quieres que se vea y funcione tu sitio pero necesitas a alguien que lo lleve a la realidad?. Puedo hacerlo, partire de cualquier diseño y requerimientos que tengas para poder hacer tu sueño realidad.",
    },
    {
      title: "Desarrollo en proyecto existente",
      desc: "Puedo continuar con el desarrollo de tu sitio web en cualquier etapa que este se encuentre, manteniendo la consistencia con el trabajo realizado hasta el momento",
    },
    {
      title: "Desarrollo desde 0",
      desc: "Este es el paquete mas completo. Partiendo desde 0 recacabare toda la informacion necesria para diseñar, construir, probar y poner a la vista tu sitio web. ",
    },
  ],
  footerNavIndex: "Portfolio",
  footerNavIndex1: "Benefits",
  footerNavIndex2: "Contact Me",
  workTools: "My Work Tools",
};

export const es = {
  navMenuItems: [
    { text: "Inicio", ref: "" },
    { text: "Portafolio", ref: "portfolio" },
    { text: "Servicios", ref: "#services" },
    { text: "Sobre Mi", ref: "about" },
    { text: "Contratame", ref: "#contact" },
  ],
  indexHero: "Creando sitios web que tus visitantes amen",
  indexHeroSubheader:
    "Te ayudare a alcanzar las metas de tu empresa por medio de un sitio web diseñado a sus necesidades",
  contactMe: "Contactarme",
  whyHireMe: "Why you want to do this",
  benefits: [
    {
      title: "Facilidad de uso",
      desc: "Tu pagina web sera intuitiva y dara pistas a tus usuarios para encontrar lo que ellos necesitan facilmente",
      descExtended: "carga rapida, optimizaciones",
      exSrc: "/images/examples/craftsman-s.gif",
    },
    {
      title: "Atractiva",
      desc: 'Tu pagina web tendra una apropiada combinacion de colores, imagenes, animaciones y mas que sacaran un "Guaao!" a tus usuarios',
      descExtended: "Resaltan lo que tu deseas",
      exSrc: "/images/examples/home-finance-login.png",
    },
    {
      title: "Diseño Responsivo - Mobile/Desktop",
      desc: "Tu pagina se adaptara al tipo de dispositivo que tus visitantes usan, ya sea una computadora, tablet o smartphone sin perder calidad.",
      descExtended: "",
    },
    {
      title: "Funcionalidad a tu gusto",
      desc: "Integra funciones de diversa complejidad en tu sitio tales como calculadoras, gráficos estadisticos dinamicos, carga y descarga de archivos, entre otras. Este tipo de funcionalidad no se puede conseguir usando una plantilla",
      descExtended: "",
    },

    {
      title: "Control sobre TU pagina",
      desc: "Te enseñare a controlar por tu cuenta el contenido de la pagina para que no dependas de mi ni de nadie mas para realizar cambios en tu contenido",
      descExtended: "",
    },
  ],
  learnMore: "Conocer Más",
  myWork: "Mi Trabajo",
  viewAllMyWork: "Ver todos mis trabajos",
  faq: [
    {
      q: "¿Cuanto tiempo se tarda?",
      a: "Depende totalmente de lo que tu caso necesite, como mencione al inicio, este es un trabajo personalizado, asi que cada caso es diferente.",
    },
    {
      q: "¿Cuanto me costará?",
      a: "First of all, this is not a regular work. If you're not fully commited to serve your users with the best, you're free to go, but if your want to do this the money you invest in this project will pay you in the future more than you image now, so it shouldn't be a problem",
    },
  ],
  services: [
    {
      title: "Desarroll a partir de diseño",
      desc: "Tienes ya un diseño de como quieres que se vea y funcione tu sitio pero necesitas a alguien que lo lleve a la realidad?. Puedo hacerlo, partire de cualquier diseño y requerimientos que tengas para poder hacer tu sueño realidad.",
      // node: (
      //   <div className="mt-4">
      //     <div className="flex justify-around border-b-2 border-primary">
      //       <Link href="https://www.flaticon.com/authors/smashicons">
      //         <a className="w-1/3 h-11 relative" title="Smashicons">
      //           <Image
      //             src="/images/pdf-icon.svg"
      //             alt="PDF icon"
      //             layout="fill"
      //           />
      //         </a>
      //       </Link>
      //       <Link href="https://www.flaticon.com/authors/bqlqn">
      //         <a className="w-1/3 h-11 relative" title="bqlqn">
      //           <Image
      //             src="/images/image-icon.svg"
      //             alt="Image icon"
      //             layout="fill"
      //           />
      //         </a>
      //       </Link>
      //       <Link href="https://www.flaticon.com/authors/smashicons">
      //         <a className="w-1/3 h-11 relative" title="Smashicons">
      //           <Image
      //             src="/images/ppt-icon.svg"
      //             alt="power point presentation icon"
      //             layout="fill"
      //           />
      //         </a>
      //       </Link>
      //     </div>

      //     <svg
      //       className="w-8 m-auto text-primary"
      //       aria-hidden="true"
      //       focusable="false"
      //       data-prefix="fas"
      //       data-icon="arrow-circle-down"
      //       role="img"
      //       xmlns="http://www.w3.org/2000/svg"
      //       viewBox="0 0 512 512"
      //     >
      //       <path
      //         fill="currentColor"
      //         d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"
      //       ></path>
      //     </svg>
      //     <div className="">
      //       <h6 className="text-txt-base">
      //         Your Website Available to Everyone!
      //       </h6>
      //     </div>
      //   </div>
      // ),
    },
    {
      title: "Desarrollo en proyecto existente",
      desc: "Puedo continuar con el desarrollo de tu sitio web en cualquier etapa que este se encuentre, manteniendo la consistencia con el trabajo realizado hasta el momento",
    },
    {
      title: "Desarrollo desde 0",
      desc: "Este es el paquete mas completo. Partiendo desde 0 recacabare toda la informacion necesria para diseñar, construir, probar y poner a la vista tu sitio web. ",
    },
  ],

  footerNavIndex: "Portafolio",
  footerNavIndex1: "Beneficios",
  footerNavIndex2: "Contactame",
};
