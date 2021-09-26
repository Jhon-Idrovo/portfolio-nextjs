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
      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/craftsman-s2_NKqVA9B7um.png?updatedAt=1631192958660",
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
      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/expenses_JUYRTGZVXKY.png?updatedAt=1631192957181",
      href: "https://your-home-finance.herokuapp.com/",
      caseStudyRef: "/case/home-finance",
    },
    {
      title: "Business Analytis Application",
      keyFunctionality: [
        "Correct registration of new users",
        "Login / Logout",
        "Data entry form",
        "Registration of information in database",
        "Calculation of additional parameters based on user input",
        "Statistical graphics",
      ],
      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/Screen_Shot_2021-09-25_at_20.10.18_xBx0gl4Gx.png?updatedAt=1632618714376",
      href: "https://apiculture.vercel.app/production",
      caseStudyRef: "/case/apiculture",
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

      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/find-a-font_Sj5nCq58r.png?updatedAt=1631192956916",
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

      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/hackernews_dNi9-LXSPU.png?updatedAt=1631192957375",
      href: "https://tech-news-app-v2.vercel.app/",
      caseStudyRef: "/case/news-page",
    },
  ],
  seeItLive: "View live",
  viewAllMyWork: "See all my jobs",
  faq: [
    {
      q: "How long does it take?",
      a: "It totally depends on what your case needs, as I mentioned at the beginning, this is a personalized job, so each case is different. But I'm always sincere about the times, I'll rather surprise you sending the work before than after.",
    },
    {
      q: "How much will it cost me?",
      a: "For complex projects I work with an hourly rate that ranges from $12 to 35$ per hour.  For simpler projects I determine one fixed price based on the work itself.<br/> Generally, things including backend work or integration with third party servicices are most costly. <br/> Exceptions: If you're an ONG or Non-Profit that needs the work and you have a tight budget, get in touch with me. I have an especial offer. ",
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
      knowMe: {
        title: "Know Me",
        content:
          "Hi! I'm Jhon Idrovo. I'm a passionate web developer searching to help you with my capabilities. <br /> I love reading,that's how I collected most of my knowledge. And that's why I'm what's considered a selft thaugth. Althoug I don't completely agree with that, since I've had the help of a lot of people that has written incredible books, articles and other resources. You can check all the books I've used through my journey on the books section.<br />I'm an avid learner. I have to admit that sometimes I have projects where I don't know a technology works or something similar. But that has never stopped me. I've reached a point where I have my own methodology for learning and using that knowledge to solve the problem at hand. That in fact, is a motivation for me, since I get the chance to stay at the top of the knowledge in my field and sharpen my habilities.<br />My hunger for success and new adventures has led me to study Economics and Business Administration. Knowledge that now combine with programming. This brings me a different point of view when facing problems in eaither of those areas.<br />Now, I'm workning through freelance, and try to meet like minded people. But also I'm planning to join/create a startup in the future.",
      },
      schooling: {
        title: "Education",
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
    { text: "Acerca de mí", ref: "about" },
  ],
  indexHero: "Crear sitios web que les encanten a sus usuarios",
  indexHeroSubheader:
    "Te ayudaré a lograr tus objetivos a través de un sitio web diseñado a la medida de tus necesidades",
  contactMe: "Contáctame",
  whyHireMe: "¿Por qué contratarme?",
  benefits: [
    {
      title: "Facilidad de uso",
      desc: "Su sitio web será intuitivo y fácil de usar, dando a sus usuarios pistas para encontrar lo que necesitan fácilmente. Evite que sus usuarios abandonen su página debido a la frustración de no encontrar lo que están buscando.",
      descExtended: "carga rápida, optimizaciones",
      exSrc: "/images/examples/craftsman-s.gif",
    },
    {
      title: "Atractivo",
      desc: "Tu sitio web tendrá una combinación adecuada de colores, imágenes, animaciones y más que le permitirá a tus usuarios saber que tienes la calidad necesaria. Además, destacaré las cosas importantes para que nadie las pase por alto.",
      descExtended: "Resalta lo que quieras",
      exSrc: "/images/examples/home-finance-login.png",
    },
    {
      title: "Diseño adaptable - Móvil / Escritorio",
      desc: "Tu página se adaptará al tipo de dispositivo de tus usuarios, ya sea computadora, tableta o smartphone, sin perder calidad. Permite que tus usuarios tengan una experiencia homogénea, brindándoles mayor confianza y seguridad en ti.",
      descExtended: "",
      exSrc: "/images/examples/responsive-website-design-development.png",
    },
    {
      title: "La funcionalidad que necesita",
      desc: "Integre funciones de diversa complejidad en su sitio, como calculadoras, gráficos estadísticos dinámicos, carga y descarga de archivos, entre otros. Este tipo de funcionalidad no se puede lograr usando una plantilla y puede ser un factor de diferenciación clave para usted",
      descExtended: "",
      exSrc: "/images/examples/expenses-vid.gif",
    },

    // {
    // title: "Control sobre SU página",
    // desc: "Te enseñaré a controlar el contenido de la página por tu cuenta para que no dependas de mí ni de nadie más para hacer cambios en tu contenido",
    // descExtended: "",
    //},
  ],
  learnMore: "Más información",
  myWork: "Mi trabajo",
  works: [
    {
      title: "Comercio electrónico",
      keyFunctionality: [
        "Landing Page",
        "Cargar productos de la base de datos",
        "Crear y mantener el carrito de la compra",
        "Filtro de producto",
        "Finalización de de compra y pago seguro para ambas partes",
      ],
      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/craftsman-s2_NKqVA9B7um.png?updatedAt=1631192958660",
      href: "https://craftsman-s.vercel.app/",
      caseStudyRef: "/ case / store",
    },

    {
      title: "Aplicación de gestión de gastos",
      keyFunctionality: [
        "Registro correcto de nuevos usuarios",
        "Iniciar sesión / Cerrar sesión",
        "Formulario de entrada de datos",
        "Registro de información en base de datos",
        "Cálculo de parámetros adicionales basados ​​en la entrada del usuario",
        "Gráficos estadísticos",
      ],
      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/expenses_JUYRTGZVXKY.png?updatedAt=1631192957181",
      href: "https://your-home-finance.herokuapp.com/",
      caseStudyRef: "/ case / home-finance",
    },
    {
      title: "Aplicación de analiticas de negocio",
      keyFunctionality: [
        "Registro correcto de nuevos usuarios",
        "Iniciar sesión / Cerrar sesión",
        "Formulario de entrada de datos",
        "Registro de información en base de datos",
        "Cálculo de parámetros adicionales basados ​​en la entrada del usuario",
        "Gráficos estadísticos",
      ],
      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/Screen_Shot_2021-09-25_at_20.10.18_xBx0gl4Gx.png?updatedAt=1632618714376",
      href: "https://apiculture.vercel.app/production",
      caseStudyRef: "/case/apiculture",
    },
    {
      title: "Probador de fuentes",
      keyFunctionality: [
        "Guardar opciones de usuario localmente",
        "Guardar las opciones del usuario en la base de datos",
        "Opciones de filtrado según las preferencias del usuario",
        "Guardar preferencias en la base de datos",
        "Registro de nuevo usuario",
        "Pagos con PayPal",
        "Iniciar sesión / Cerrar sesión",
      ],

      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/find-a-font_Sj5nCq58r.png?updatedAt=1631192956916",
      href: "https://font-tester-inky.vercel.app/",
      caseStudyRef: "/ case / font-tester",
    },
    {
      title: "Página de noticias",
      keyFunctionality: [
        "Carga de datos inicial optimizada",
        "Guarde las noticias cargadas anteriormente para evitar que se vuelvan a cargar",
        "Carga de páginas adicionales a petición del usuario",
        "Implementación del 'Modo noche'",
      ],

      src: "https://ik.imagekit.io/z1hpocqao6o/portfolio/my-work/hackernews_dNi9-LXSPU.png?updatedAt=1631192957375",
      href: "https://tech-news-app-v2.vercel.app/",
      caseStudyRef: "/ case / news-page",
    },
  ],
  seeItLive: "Ver en vivo",
  viewAllMyWork: "Ver todos mis trabajos",
  faq: [
    {
      q: "¿Cuánto tiempo se tarda?",
      a: "Depende totalmente de lo que necesite tu caso, como comenté al principio, este es un trabajo personalizado, por lo que cada caso es diferente. Pero siempre soy sincero sobre los tiempos, prefiero sorprenderte enviando el trabajo antes que después. ",
    },
    {
      q: "¿Cuánto me costará?",
      a: "Para proyectos complejos, trabajo con una tarifa por hora que oscila entre $ 12 y $ 35 por hora. Para proyectos más simples, determino un precio fijo basado en el trabajo en sí. <br/> Generalmente, cosas que incluyen el trabajo de backend o la integración con servicios de terceros son los más costosos. <br/> Excepciones: Si eres una ONG o una organización sin fines de lucro que necesita el trabajo y tienes un presupuesto ajustado, ponte en contacto conmigo, tengo una oferta especial.",
    },
  ],
  techStack: "Stack",

  services: [
    {
      title: "Desarrollo a partir de diseño",
      desc: "Ya tienes un diseño de cómo quieres que se vea y funcione tu sitio web, pero ¿necesitas a alguien que lo lleve a la realidad? Puedo hacerlo. Basándome en cualquier diseño y requisitos que tengas para hacer realidad tu sueño",
    },
    {
      title: "Desarrollo en proyecto existente",
      desc: "Puedo continuar con el desarrollo de su sitio web en cualquier etapa en la que se encuentre, manteniendo la coherencia con el trabajo realizado hasta ahora",
    },
    {
      title: "Desarrollo desde 0",
      desc: "Este es el paquete más completo. A partir de 0, recopilaré toda la información necesaria para diseñar, construir, probar y desplegar su sitio web.",
    },
  ],
  about: {
    sections: {
      knowMe: {
        title: "Conóceme",
        content:
          "¡Hola! Soy Jhon Idrovo. Soy un desarrollador web apasionado que busca ayudarlo con mis capacidades. <br /> Me encanta leer, así es como recopilé la mayor parte de mi conocimiento. Y es por eso que soy lo que se considera un autodidacta. Aunque no estoy completamente de acuerdo con eso, ya que he tenido la ayuda de mucha gente que ha escrito libros, artículos y otros recursos increíbles. Puedes consultar todos los libros que he usado a lo largo de mi viaje en la sección de libros. <br /> Soy un ávido aprendiz. Tengo que admitir que a veces tengo proyectos en los que no sé que funciona una tecnología o algo similar. Pero eso nunca me ha detenido. He llegado a un punto donde tengo mi propia metodología para aprender y usar ese conocimiento para resolver el problema en cuestión, eso de hecho, es una motivación para mí, ya que tengo la oportunidad de mantenerme en la cima del conocimiento en mi campo y afinar mis habilidades. <br /> Mi hambre de éxito y nuevas aventuras me ha llevado a estudiar Economía y Administración de Empresas. Conocimientos que ahora combinan e con programación. Esto me trae un punto de vista diferente cuando enfrento problemas en cualquiera de esas áreas. <br /> Ahora, estoy trabajando como autónomo y trato de conocer gente de ideas afines. Pero también planeo unirme / crear una startup en el futuro. ",
      },
      schooling: {
        title: "Educación",
        content: {
          books: {
            title: "Libros",
            description:
              "Una de las fuentes de mi conocimiento más profundo provino de libros escritos por mentes muy por delante de mí. Aquí, les presento una lista de los libros relacionados con la programación más útiles que he leído. Todos ellos son extremadamente útiles para desarrollar soluciones para ti.",
            quote: {
              text: "Si he visto más lejos es subiéndome a hombros de Gigantes",
              author: "Isaac Newton, 1675",
            },
            booksList: [
              {
                name: "Algoritmos para vivir: la informática de las decisiones humanas",
                autor: "Brian Christian y Tom Griffiths",
                imgURL: "https://m.media-amazon.com/images/I/51HiU+5mTwL.jpg",
              },
              {
                name: "Arquitectura limpia: una guía del artesano para la estructura y el diseño del software",
                autor: "Robert C. Martin",
                imgURL: "https://m.media-amazon.com/images/I/51ev4PLtsML.jpg",
              },
              {
                name: "El programador pragmático: de jornalero a maestro",
                autor: "Andrew Hunt y David Thomas",
                imgURL:
                  "https://m.media-amazon.com/images/I/41as+WafrFL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Algoritmos de Grokking",
                autor: "Aditya Bhargava, Derek Lettman, et al.",
                imgURL:
                  "https://m.media-amazon.com/images/I/91ZwLB+BipL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Django - The Easy Way",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/71vjFToTllL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Introducción a los algoritmos",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
              },
              {
                name: "Principios universales de diseño",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81XY518GOhL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Diseño de aplicaciones con uso intensivo de datos: las grandes ideas detrás de sistemas confiables, escalables y mantenibles",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/91rkMMsmkRL._AC_UY436_QL65_.jpg",
              },
              {
                name: "Soluciones de diseño de bases de datos para principiantes",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://images-na.ssl-images-amazon.com/images/I/41PzcwtBjQL._SX397_BO1,204,203,200_.jpg",
              },
              {
                name: "Código: El idioma oculto",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/61NiOAzFheL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First JavaScript Programming: A Brain-Friendly Guide",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81h4jxKvcmS._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First JavaScript",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/519zH9A5AwL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First HTML y CSS",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/91JnhRID+5L._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Head First Python",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81Gt2O4FvTL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Principios de la economía",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/81UPJjLHp8L._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Leithold",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/51uIz7K3SkL._AC_UY436_FMwebp_QL65_.jpg",
              },
              {
                name: "Introducción a la probabilidad: Blitztein",
                autor: "Brian Christian y Tom Griffiths",
                imgURL:
                  "https://m.media-amazon.com/images/I/61uUU63o73L._AC_UY436_FMwebp_QL65_.jpg",
              },
            ],
            footer: "Tenga en cuenta que hay más",
          },
          courses: {
            coursesList: [
              "Platzi Python Web Scrapyng",
              "Curso de Freecodecamp Node.js",
              "Curso Freecodecamp MERN Stack",
              "Varios cursos de React",
              "Curso Fireship Firestore & Stripe",
            ],
          },
        },
      },
      strengths: {
        title: "Fortalezas y debilidades",
        description:
          "Es fácil decir en qué estamos bien. Pero encontrar y aceptar esas cosas en las que tenemos una debilidad es difícil. Pero, ese es el primer paso para superarlo",
        content: {
          strengths: {
            title: "Fortalezas",
            strengthsList: [
              {
                title: "Aprendiz ávido",
                description:
                  "Utilizando un enfoque de primeros principios, puedo aprender muchas cosas con bastante rapidez y, lo más importante, comprenderlas",
              },
              {
                title: "Resiliencia",
                description:
                  "No estoy acostumbrado a rendirme. Si sé que el camino es correcto, lo seguiré hasta el final",
              },
              {
                title: "Mentalidad de los primeros principios",
                description:
                  'Cuando me enfrento a un problema, empiezo a pensar en los fundamentos, en la causa raíz. No voy con el "Si x pasa tu haces y, lo hemos hecho así siempre". Siempre hay una mejor manera.',
              },
            ],
          },
          weaknesses: {
            tittle: "Debilidades",
            weaknessesList: [
              {
                tittle: "No renunciar a un problema sin sentido",
                description:
                  "A veces me quedo atrapado en un problema que no era la raíz del problema. Es decir, no era necesario resolverlo. Pero, como me niego a darme por vencido, a veces pierdo mis recursos. Sé que concentrarme y resolver el problema El problema de raíz es el objetivo, pero a veces es más fácil decirlo que hacerlo. ",
              },
              {
                tittle: "Toma de decisiones con muy poca información",
                description:
                  "En algunos casos, simplemente tomo una decisión sin verificar todos los escenarios posibles y espero la retroalimentación. En algunos casos esto no es óptimo ya que he tenido que limpiar",
              },
            ],
          },
        },
      },
    },
  },

  footerNavIndex: "Portafolio",
  footerNavIndex1: "Beneficios",
  footerNavIndex2: "Contáctame",
  call: "Hacer una llamada",
  sendEmail: "Enviar correo electrónico",
  contact: "Contacto",
};
