const NavLinks = [
  {
    id: "#",
    title: "Home",
  },
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#resume",
    title: "Resume",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const Tabs = ["Education", "Experience", "Programming Skills", "Interests"];

const Education = [
  {
    id: 1,
    university: "Kiev National University of Trade and Economics, Ukraine",
    major: "Economics and Public Administration",
    years: "2006-2008",
  },
  {
    id: 2,
    university: "Taurida National V.I. Vernadsky University, Ukraine",
    major: "Translation and Interpreting, English and French",
    years: "2011-2013",
  },
];

const Experience = [
  {
    id: 3,
    title: "Madi Gras Digital",
    position: "Frontend Developer",
    years: "August, 2022 - Present",
    duties: [
      "Creating frontend interfaces from Figma designs using Vue.js and Razor Pages",
      "Developing Umbraco CMS based solutions",
      "Collaborating with other developers in creating an in-house component library built with Vue 3, Vite, TypeScript and Storybook",
    ],
  },
  {
    id: 4,
    title: "Websearch Professional",
    position: "Frontend Developer",
    years: "April, 2022 - May, 2022",
    duties: [
      "Development of a web application that showcases the performance and impact of a client's business. The application is built using HTML, SCSS, ReactJS. It also uses different animations and ChartJS to display data in a user engaging way.",
    ],
  },
  {
    id: 5,
    title: "SEO and Affiliate Marketing",
    position: "Self Employed",
    years: "2014 - 2022",
    duties: [
      "Running my own business as part of the Amazon's Associate Program",
      "Research of product niches, keywords and competition on Google",
      "Researched products and prepared reviews",
      "Created websites on Wordpress",
      "Published optimized content for high search engine ranking",
      "Worked on on- and off-page SEO",
    ],
  },
];

const ProgrammingSkills = [
  "Vue.js",
  "Umbraco",
  "Razor Pages",
  "Typescipt",
  "React.js",
  "GrahpQL",
  "HTML & SCSS",
  "Bootstrap",
  "Vitest"
]

const Interests = [
  {
    icon: <i className="fas fa-laptop-code"></i>,
    title: "Tech",
  },
  {
    icon: <i className="fas fa-globe-americas"></i>,
    title: "Travelling",
  },
  {
    icon: <i className="fas fa-hiking"></i>,
    title: "Hiking",
  },
  {
    icon: <i className="fas fa-book-open"></i>,
    title: "Reading",
  },
  {
    icon: <i className="fas fa-running"></i>,
    title: "Running",
  },
];

export default {
  NavLinks,
  Tabs,
  Education,
  Experience,
  ProgrammingSkills,
  Interests,
};
