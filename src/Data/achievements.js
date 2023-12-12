import civil from "../assets/offers Images/civil.jpg";
import eco from "../assets/offers Images/eco.jpg";
import susdev from "../assets/offers Images/susdev.jpg";
import sports from "../assets/offers Images/sports.jpg";
import eduscience from "../assets/offers Images/eduscience.jpg";
import info from "../assets/offers Images/info.jpg";
import english from "../assets/offers Images/english.jpg";

// import Achievements5 from "../Assets/Achievements5.webp";

const achievements = [
  {
    name: "BUSINESS ADMINISTRATION",
    description:
      "The 3-year Degree Course in Business Administration provides students with a training that meet the needs of different types of businesses.",
    img: eco,
    offer_duration:
      "DURATION: 3 Years",
    offer_fees : "FEES: € 3000",
    offer_link: "/courses/business-administartion",
    course_link : "/course",
    align: 0,
    delay: "1000",
  },
  {
    name: "SPORT SCIENCE",
    description:
      "The 3-year Degree Course in Sport Sciences aims to provide students with knowledge and skills suitable for managing, performing and assessing sport individual and group activities of a compensatory.",
    img: sports,
    offer_duration:
      "DURATION: 3 Years",
    offer_fees : "FEES: € 3000",
    offer_link: "/courses/sport-science",
    course_link : "/course",
    align: 0,
    delay: "1000",
  },
  {
    name: "EDUCATIONAL SCIENCES",
    description:
      "The 3-year bachelor degree course in Educational Sciences is aimed at acquiring the basic and methodological skills concerning pedagogical and didactic knowledge.",
    img: eduscience,
    offer_duration:
      "DURATION: 3 Years",
    offer_fees : "FEES: € 3000",
    offer_link: "/courses/educational-science",
    course_link : "/course",
    align: 0,
    delay: "1000",
  },
  {
    name: "CIVIL ENGENEERING",
    description:
      "The areas of interest related to this 3-year bachelor Degree course in Civil Engineering are construction and infrastructures.",
    img: civil,
    offer_duration:
      "DURATION: 3 Years",
    offer_fees : "FEES: € 3000",
    align: 0,
    offer_link: "/courses/civil-engineering",
    course_link : "/course",
    delay: "1000",
  },
  // {
  //   name: "Arvind Patel",
  //   description:
  //     " First Position at Bro Code & Code Capture Competition organised by PCCOE, Ravet.",
  //   img: Achievements5,
  //   align: 0,
  //   delay: "1000",
  // },
];
const master = [
  {
    name: "INFORMATICS",
    description:
      "Master of Science in Informatics is a 1-year master’s programme for those who wish to continue studying Informatics after completion of a bachelor’s degree programme.",
    img: info,
    offer_duration:
      "DURATION: 1 Year",
    offer_fees : "FEES: € 3000",
    align: 0,
    offer_link: "/courses/informatics",
    course_link : "/course",
    delay: "1000",
  },
  {
    name: "SUSTAINABLE DEVELOPEMENT",
    description:
      "Sustainable Development is a fast growing discipline within areas of study that complement such growth, thereby developing in tandem.",
    img: susdev,
    offer_duration:
      "DURATION: 1 Year",
    offer_fees : "FEES: € 4000",
    align: 0,
    offer_link: "/courses/sustainable-developement",
    course_link : "/course",
    delay: "1000",
  },
];
const English = [
  {
    name: "ENGLISH COURSES",
    description:
      "Pegaso International provides language training through its internal Language Centre, a multilingual environment that offers a range of English courses.",
    img: english,
    align: 0,
    offer_link: "/courses/english-courses",
    course_link : "/course",
    delay: "1000",
  },
]

export { achievements, master, English };
