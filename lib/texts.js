import Image from "next/image";
import Link from "next/link";

export const en = {
  navMenuItems: [
    { text: "Home", ref: "" },
    { text: "Portfolio", ref: "#portfolio" },
    { text: "Services", ref: "#services" },
    { text: "About Me", ref: "about" },
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
      caseStudyRef: "/case/store",
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
      caseStudyRef: "/case/home-finance",
    },
    {
      title: "Font Tester",
      keyFunctionality: [
        "Saving user choices locally",
        "Saving user choices in database",
        "Filtering options based on user preferences",
        "Saving preferences in database",
        "New user registration",
        "Payments with PayPal",
        "Login / Logout",
      ],

      src: "/images/my-work/find-a-font.png",
      href: "https://font-tester-inky.vercel.app/",
      caseStudyRef: "/case/font-tester",
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
      caseStudyRef: "/case/news-page",
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
      a: "",
    },
  ],
  techStack: "Tech Stack",

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
  about: {
    sections: {
      knowMe: { title: "Know Me", content: "" },
      schooling: {
        title: "Schooling",
        content: {
          books: {
            tittle: "Books",
            description:
              "One of the sources of my most profound knowledge came through books written by minds far ahead of me. Here, I present to you a list of the most useful programming related books I've readed. All of them are extremely useful on developing solutions for you.",
            quote: {
              text: "If I have seen further it is by standing on the shoulders of Giants",
              author: "Isaac Newton, 1675",
            },
            booksList: [
              {
                name: "Algorithms to Live By: The Computer Science of Human Decisions ",
                author: "Brian Christian and Tom Griffiths",
                imgURL: "https://m.media-amazon.com/images/I/51HiU+5mTwL.jpg",
              },
              {
                name: "Clean Architecture: A Craftsman's Guide to Software Structure and Design ",
                author: "Robert C. Martin",
                imgURL: "https://m.media-amazon.com/images/I/51ev4PLtsML.jpg",
              },
              {
                name: "The Pragmatic Programmer: From Journeyman to Master",
                author: "Andrew Hunt and David Thomas",
                imgURL:
                  "https://m.media-amazon.com/images/I/41as+WafrFL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Grokking Algorithms",
                author: "Aditya Bhargava, Derek Lettman, et al.",
                imgURL:
                  "https://m.media-amazon.com/images/I/91ZwLB+BipL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Django - The Easy Way",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/71vjFToTllL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Introduction to Algorithms",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
              },
              {
                name: "Universal Principles of Design",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81XY518GOhL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/91rkMMsmkRL._AC_UY436_QL65_.jpg",
              },
              {
                name: "Beginning Database Design Solutions",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://images-na.ssl-images-amazon.com/images/I/41PzcwtBjQL._SX397_BO1,204,203,200_.jpg",
              },
              {
                name: "Code: The Hidden Language",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/61NiOAzFheL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First JavaScript Programming: A Brain-Friendly Guide",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81h4jxKvcmS._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First JavaScript",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/519zH9A5AwL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First HTML and CSS",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/91JnhRID+5L._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First Python",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81Gt2O4FvTL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Principles of Economics ",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81UPJjLHp8L._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Leithold",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/51uIz7K3SkL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Introduction to probability: Blitztein",
                author: "Brian Christian and Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/61uUU63o73L._AC_UY436_FMwebp_QL65_.jpg",
              },
            ],
            footer: "Note that there are more ",
          },
          courses: {
            coursesList: [
              "Platzi Python Web Scrapyng",
              "Freecodecamp Node.js course",
              "Freecodecamp MERN Stack course",
              "Multiple React courses",
              "Fireship Firestore&Stripe course",
            ],
          },
        },
      },
      strengths: {
        title: "Strengths and Weaknesses",
        description:
          "Is easy to say in what are we good. But finding and accepting those things in which we have a weakness is difficult. But, that is the first step to overecome it.",
        content: {
          strengths: {
            title: "Strengths",
            strengthsList: [
              {
                title: "Avid Learner",
                description:
                  "Using a first principles approach I am able to learn a lot of things quite fast, and most important, undertanding it.",
              },
              {
                title: "Resilience",
                description:
                  "I am not used to give up. If I know that the path is rigth, I will follow it to the end.",
              },
              {
                title: "First Principles Mentality",
                description:
                  'When I face a problem I start thinking in the fundamentals, in the root cause. I do not go with the  "If x happens you do y, we have done it this way always". There is always a better way.',
              },
            ],
          },
          weaknesses: {
            tittle: "Weaknesses",
            weaknessesList: [
              {
                tittle: "Not Giving Up To A Meaningless Problem",
                description:
                  "Sometimes I get caugth in a problem that was not the root problem. That is, it was not neccessary to solve it. But, as I refuse to give up I sometimes lost my resourses on it. I know that focusing on and solving the root problem is the goal, but sometines it is easier said than done.",
              },
              {
                tittle: "Taking Decisions With Too Little Information",
                description:
                  "Someties I just take a decision without checking all the possible escenarios and wait for the feedback. In some cases this is not optimal since I have had to clean up.",
              },
            ],
          },
        },
      },
    },
  },

  footerNavIndex: "Portfolio",
  footerNavIndex1: "Benefits",
  footerNavIndex2: "Contact me",
  call: "Make a call",
  sendEmail: "Send email",
  contact: "Contact",
};

export const es = {
  navMenuItems: [
    { text: "Inicio", ref: "" },
    { text: "Portafolio", ref: "#portfolio" },
    { text: "Servicios", ref: "#services" },
    { text: "Sobre Mi", ref: "about" },
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
      a: "",
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
  call: "Hacer una llamada",
  sendEmail: "Enviar email",
  contact: "Contacto",
};
