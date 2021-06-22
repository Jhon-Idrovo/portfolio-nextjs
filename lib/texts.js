import Image from "next/image";
import Link from "next/link";

export const en = {
  navMenuItems: [
    { text: "Home", ref: "" },
    { text: "Portfolio", ref: "portfolio" },
    { text: "Servicios", ref: "#services" },
    { text: "About Me", ref: "about" },
    { text: "Hire me", ref: "#contact" },
  ],
  indexHero: "Creating websites that your users love",
  indexHeroSubheader:
    "I will help you achieve your goals through a website designed to fit your needs",
  contactMe: "Contact me",
  whyHireMe: "Why hire me?",
  benefits: [
    {
      title: "Ease of use",
      desc: "Your website will be intuitive and easy to use, giving your users clues to find what they need easily. Prevent your users from leaving your page due to the frustration of not finding what they are looking for.",
      descExtended: "fast loading, optimizations",
      exSrc: "/images/examples/craftsman-s.gif",
    },
    {
      title: "Attractive",
      desc: "Your website will have an appropriate combination of colors, images, animations and more that will let your users know that you have the necessary quality. Also, I will highlight the important things so that they are not overlooked.",
      descExtended: "Highlight what you want",
      exSrc: "/images/examples/home-finance-login.png",
    },
    {
      title: "Responsive Design - Mobile / Desktop",
      desc: "Your page will adapt to the type of device of your users, be it a computer, tablet or smartphone, without losing quality. It allows your users to have a homogeneous experience, giving them greater confidence and security in you.",
      descExtended: "",
      exSrc: "/images/examples/responsive-website-design-development.png",
    },
    {
      title: "The functionality you need",
      desc: "Integrate functions of varying complexity into your site such as calculators, dynamic statistical graphs, file upload and download, among others. This type of functionality cannot be achieved using a template and can be a key differentiating factor for you. ",
      descExtended: "",
      exSrc: "/images/examples/expenses-vid.gif",
    },

    // {
    // title: "Control over YOUR page",
    // desc: "I will teach you to control the content of the page on your own so that you do not depend on me or anyone else to make changes to your content",
    // descExtended: "",
    //},
  ],
  learnMore: "Learn More",
  myWork: "My Work",
  works: [
    {
      title: "E-commerce",
      keyFunctionality: [
        "Landing page",
        "Load products from the database",
        "Create and maintain shopping cart",
        "Product filter",
        "Completion of the purchase and payment methods",
      ],
      src: "/images/my-work/craftsman-s2.png",
      href: "https://craftsman-s.vercel.app/",
    },

    {
      title: "Expense Management Application",
      keyFunctionality: [
        "Correct registration of new users",
        "Login / Logout",
        "Data entry form",
        "Registration of information in database",
        "Calculation of additional parameters based on user input",
        "Statistical graphics",
      ],
      src: "/images/my-work/expenses.png",
      href: "https://your-home-finance.herokuapp.com/",
    },
    {
      title: "FindAFont",
      keyFunctionality: [
        "Saving user choices locally",
        "Saving user choices in database",
        "Filtering options based on user preferences",
        "Saving preferences in database",
        "New user registration",
        "Login / Logout",
      ],

      src: "/images/my-work/find-a-font.png",
      href: "https://find-af-ont.vercel.app/",
    },
    {
      title: "News page",
      keyFunctionality: [
        "Initial data load optimized",
        "Save previously loaded news to avoid reloading",
        "Loading additional pages at the user's request",
        "Implementation of 'Night mode'",
      ],

      src: "/images/my-work/hackernews.png",
      href: "https://tech-news-app-v2.vercel.app/",
    },
  ],
  seeItLive: "View live",
  viewAllMyWork: "See all my jobs",
  faq: [
    {
      q: "How long does it take?",
      a: "It totally depends on what your case needs, as I mentioned at the beginning, this is a personalized job, so each case is different.",
    },
    {
      q: "How much will it cost me?",
      a: "First of all, this is not a regular work. If you're not fully committed to serve your users with the best, you're free to go, but if your want to do this the money you invest in this project will pay you in the future more than you image now, so it shouldn't be a problem ",
    },
  ],
  services: [
    {
      title: "Development from design",
      desc: "You already have a design of how you want your website to look and work but do you need someone to take it to reality? I can do it, based on any design and requirements you have to make your dream come true.",
    },
    {
      title: "Development in existing project",
      desc: "I can continue with the development of your website at whatever stage it is in, maintaining consistency with the work done so far",
    },
    {
      title: "Development from 0",
      desc: "This is the most complete package. Starting from 0 I will gather all the information necessary to design, build, test and display your website.",
    },
  ],

  footerNavIndex: "Portfolio",
  footerNavIndex1: "Benefits",
  footerNavIndex2: "Contact me",
};

export const es = {
  navMenuItems: [
    { text: "Inicio", ref: "" },
    { text: "Portafolio", ref: "portfolio" },
    { text: "Servicios", ref: "#services" },
    { text: "Sobre Mi", ref: "about" },
    { text: "Contratame", ref: "#contact" },
  ],
  indexHero: "Creando sitios web que tus usuarios amen",
  indexHeroSubheader:
    "Te ayudare a alcanzar las metas de tu empresa por medio de un sitio web diseñado a sus necesidades",
  contactMe: "Contactarme",
  whyHireMe: "Porque contratarme?",
  benefits: [
    {
      title: "Facilidad de uso",
      desc: "Tu sitio web sera intuitivo y facil de usar, dando pistas a tus usuarios para que encuentren lo que necesitan facilmente. Evita que tus usuarios abandonen tu pagina debido a la frustración de no encontar lo que buscan.",
      descExtended: "carga rapida, optimizaciones",
      exSrc: "/images/examples/craftsman-s.gif",
    },
    {
      title: "Atractiva",
      desc: "Tu sitio web tendra una apropiada combinacion de colores, imagenes, animaciones y mas que haran saber a tus usuarios que tienes la calidad necesaria. Ademas, resaltaré las cosas impotantes para que no sean pasadas por alto. ",
      descExtended: "Resaltan lo que tu deseas",
      exSrc: "/images/examples/home-finance-login.png",
    },
    {
      title: "Diseño Responsivo - Mobile/Desktop",
      desc: "Tu pagina se adaptara al tipo de dispositivo de tus usuarios, ya sea una computadora, tablet o smartphone, sin perder calidad. Permite que tus usuarios tengan una experiencia homogenea, dandoles mayor confianza y seguridad en ti.",
      descExtended: "",
      exSrc: "/images/examples/responsive-website-design-development.png",
    },
    {
      title: "La funcionalidad que necesites",
      desc: "Integra funciones de diversa complejidad en tu sitio tales como calculadoras, gráficos estadisticos dinamicos, carga y descarga de archivos, entre otras. Este tipo de funcionalidad no se puede conseguir usando una plantilla y puede ser un factor clave de diferenciación para ti. ",
      descExtended: "",
      exSrc: "/images/examples/expenses-vid.gif",
    },

    // {
    //   title: "Control sobre TU pagina",
    //   desc: "Te enseñare a controlar por tu cuenta el contenido de la pagina para que no dependas de mi ni de nadie mas para realizar cambios en tu contenido",
    //   descExtended: "",
    // },
  ],
  learnMore: "Conocer Más",
  myWork: "Mi Trabajo",
  works: [
    {
      title: "E-commerce",
      keyFunctionality: [
        "Landing page",
        "Cargar productos desde la base de datos",
        "Crear y mantener carrito de compras",
        "Filtro de productos",
        "Finalización de la compra y metodos de pago",
      ],
      src: "/images/my-work/craftsman-s2.png",
      href: "https://craftsman-s.vercel.app/",
    },

    {
      title: "Applicación de Gestion de Gastos",
      keyFunctionality: [
        "Registro correcto de usuarios nuevos",
        "Login/Logout",
        "Formulario de ingreso de datos",
        "Registro de informacion en base de datos",
        "Cálculo de parametros adicionales en base a las entradas del usuario",
        "Graficos estadísticos",
      ],
      src: "/images/my-work/expenses.png",
      href: "https://your-home-finance.herokuapp.com/",
    },
    {
      title: "FindAFont",
      keyFunctionality: [
        "Guardado de elecciones del usuario de manera local",
        "Guardado de elecciones del usuario en base de datos",
        "Filtrado de opciones en base a preferencias del usuario",
        "Guardado de preferencias en base de datos",
        "Registro de usuarios nuevos",
        "Login/Logout",
      ],

      src: "/images/my-work/find-a-font.png",
      href: "https://find-af-ont.vercel.app/",
    },
    {
      title: "Página de noticias",
      keyFunctionality: [
        "Carga inicial de datos optimizada",
        "Guardar noticias cargadas previamente para evitar cargarlas nuevamente",
        "Carga de paginas adicionales a demanda del usuario",
        "Implementacion de 'Modo noche' ",
      ],

      src: "/images/my-work/hackernews.png",
      href: "https://tech-news-app-v2.vercel.app/",
    },
  ],
  seeItLive: "Ver en vivo",
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
      desc: "Tienes ya un diseño de como quieres que se vea y funcione tu sitio web pero necesitas a alguien que lo lleve a la realidad?. Puedo hacerlo, partire de cualquier diseño y requerimientos que tengas para poder hacer tu sueño realidad.",
    },
    {
      title: "Desarrollo en proyecto existente",
      desc: "Puedo continuar con el desarrollo de tu sitio web en cualquier etapa que este se encuentre, manteniendo la consistencia con el trabajo realizado hasta el momento",
    },
    {
      title: "Desarrollo desde 0",
      desc: "Este es el paquete mas completo. Partiendo desde 0 recacabare toda la informacion necesaria para diseñar, construir, probar y poner a la vista tu sitio web. ",
    },
  ],

  footerNavIndex: "Portafolio",
  footerNavIndex1: "Beneficios",
  footerNavIndex2: "Contactame",
};
