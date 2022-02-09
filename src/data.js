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
    title: "SEO and Affiliate Marketing",
    position: "Self Employed",
    years: "2014 - Present",
    duties: [
      "Running my own business as part of the Amazon's Associate Program",
      "Research of product niches, keywords and competition on Google",
      "Researched products and prepared reviews",
      "Created websites on Wordpress",
      "Published optimized content for high search engine ranking",
      "Worked on on- and off-page SEO",
    ],
  },
  {
    id: 4,
    title: "Teaching",
    position: "English Teacher",
    years: "2013 (6 months)",
    duties: [
      "Taught English in kindergarten in China",
      "Prepared teaching and held classes",
    ],
  },
];

const ProgrammingSkills = [
  {
    icon: <i className="fab fa-html5"></i>,
    title: "HTML",
    clr: "#e60000",
  },
  {
    icon: <i className="fab fa-css3-alt"></i>,
    title: "CSS",
    clr: "#1d65aa",
  },
  {
    icon: <i className="fab fa-js-square"></i>,
    title: "JavaScript",
    clr: "#f2ec00",
  },
  {
    icon: <i className="fab fa-react"></i>,
    title: "React.js",
    clr: "#00dcff",
  },
];

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
    title: "Working Out",
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
