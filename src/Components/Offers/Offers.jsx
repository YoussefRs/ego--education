import React, { useEffect, useState, useRef } from "react";
import "./Offers.css";
import AOS from "aos";
import { achievements, master, English } from "../../Data/achievements";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import pegaso from "../../assets/logo/Progetto-senza-titolo.png";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import java from "../../assets/Java-programming.png";
import security from "../../assets/master-of-science-in-cyber-security.jpg";

const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [canNavigateBack, setCanNavigateBack] = useState(true); 
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [listPath, setListPath] = useState([document.getElementById("list-0")]);
  const onBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (listPath.length < 2) {
      return false;
    }

    const updatedListPath = [...listPath];
    
    const removedList = updatedListPath.pop();
    setListPath(updatedListPath);

    removedList.classList.remove("active-list");
    if (updatedListPath.length > 0) {
      updatedListPath[updatedListPath.length - 1].classList.remove(
        "parent-list"
      );
    }

    removedList
      .closest(".list-body-container")
      .querySelectorAll(".list-link")
      .forEach((link) => link.classList.remove("active-link"));

    window.setTimeout(() => {
      removedList.classList.add("hidden");
    }, 310);

    // Check if going back to the list header container
    if (removedList.id !== "list-0") {
      // Allow navigation back to the list header container
      setCanNavigateBack(true);
    } else {
      // Disallow navigation back if already in the list header container
      setCanNavigateBack(false);
    }
  };
  console.log(listPath)
  const onLinkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const link = e.target;
    const listId = link.getAttribute("href");
    const list = document.querySelector(listId);

    if (!list) {
      return false;
    }

    link.classList.add("active-link");
    list.classList.remove("hidden");

    window.setTimeout(() => {
      list.classList.add("active-list");
    }, 10);

    setListPath((prevListPath) => [...prevListPath, list]);

    if (listPath.length > 0) {
      listPath[listPath.length - 1].classList.add("parent-list");
    }
  };
  // useEffect(() => {
  //   // Attach event listeners
  //   const backLink = document.querySelector(".back-link");
  //   backLink.addEventListener("click", onBackClick);

  //   const listLinks = document.querySelectorAll(".list-link");
  //   listLinks.forEach((link) => link.addEventListener("click", onLinkClick));

  //   // Cleanup on component unmount
  //   return () => {
  //     backLink.removeEventListener("click", onBackClick);
  //     listLinks.forEach((link) =>
  //       link.removeEventListener("click", onLinkClick)
  //     );
  //   };
  // }, [listPath]);


  const [mode, setMode] = useState("light");
  const overlay = useRef(null);
  const msg = useRef(null);
  const main = useRef(null);
  const htmlCourse = useRef(null);
  const cssCourse = useRef(null);
  const jsCourse = useRef(null);
  const backBtns = useRef(null);
  const buttons = useRef(null);
  const markBtns = useRef(null);

  const htmlCourses = useRef(null);
  const cssCourses = useRef(null);
  const jsCourses = useRef(null);
  const progressBars = useRef(null);
  const progressText = useRef(null);

  const allCourses = [htmlCourses, cssCourses, jsCourses];

  const updateCourses = () => {
    for (let i = 0; i < progressBars?.current?.length; i++) {
      const course = allCourses.current[i];
      const length = course.length - 1;
      let completed = 0;
      for (let j = 0; j < course.length; j++) {
        if (course[j].classList[2]) {
          completed += 1;
        }
      }
      progressText.current[
        i
      ].innerText = `${completed}/${length} Lessons Completed`;
      progressBars.current[i].style.width = (completed / length) * 200 + "px";
    }
  };

  updateCourses();

  const showCourse = (course) => {
    course.current.style.transform = "translateX(0px)";
    course.current.style.display = "block";
  };

  const hideCourse = (course) => {
    course.current.style.transform = "translateX(150%)";
    course.current.style.display = "none";
  };

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleButtonClick = (courseToShow) => {
    overlay.current.style.transformOrigin = "right";
    overlay.current.style.transform = "scaleX(1)";
    msg.current.innerText = "Loading Course...";

    setTimeout(() => {
      msg.current.style.opacity = 1;
      hideCourse(main);
    }, 500);

    setTimeout(() => {
      msg.current.style.opacity = 0;
      showCourse(courseToShow);
    }, 2500);

    setTimeout(() => {
      overlay.current.style.transformOrigin = "left";
      overlay.current.style.transform = "scaleX(0)";
    }, 3000);
  };

  const handleBackButtonClick = () => {
    overlay.current.style.transformOrigin = "right";
    overlay.current.style.transform = "scaleX(1)";
    msg.current.innerText = "Loading Courses...";

    setTimeout(() => {
      msg.current.style.opacity = 1;
      for (let course of [htmlCourse, cssCourse, jsCourse]) {
        hideCourse(course);
      }
    }, 500);

    setTimeout(() => {
      msg.current.style.opacity = 0;
      showCourse(main);
    }, 2500);

    setTimeout(() => {
      overlay.current.style.transformOrigin = "left";
      overlay.current.style.transform = "scaleX(0)";
    }, 3000);
  };

  const handleMarkButtonClick = (parentLesson, btn) => {
    const checked = parentLesson.classList[2] ? true : false;
    if (checked) {
      parentLesson.classList.remove("checked");
      btn.innerText = "Mark as Done";
    } else {
      parentLesson.classList.add("checked");
      btn.innerText = "Mark as Incomplete";
    }
    updateCourses();
  };



  return (
    <div className="achievements_section">
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size="lg"
          className="offer_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Master of Science in Java Programming
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The aim of the course is to allow students to deal with the entire
              software development cycle, from the analysis of customer needs to
              the structuring of the database, from the design of the user
              interface to the construction of the back end using Object
              Oriented programming model and the Java language.
            </p>
            <ul>
              Career:
              <li>Java Programmer</li>
              <li>Software Engineer</li>
              <li>IT/Java Programme Manager</li>
            </ul>
            <span>Entry Requirements</span>
            <ul>
              Applicants are required to have a:
              <li>
                Minimum Level 6 qualification or equivalent in either Computer
                Science, Electrical or Electronic Engineering, Mathematics,
                Physics, related disciplines with demonstrable exposure to
                programming and mathematics or other alternative subjects
                related to data analysis, data science or informatics, or a
                recognized equivalent international qualification.
              </li>
              <li>IELTS 6.0 or equivalent</li>
            </ul>
            <span>Methodology</span>
            <p>
              The programme comprises an online approach promoting the building
              of a community of practice via peer-to-peer learning which is
              asynchronous. Students have the freedom and flexibility to access
              the course at a time which is most convenient to them.
            </p>
            <ul>
              Modules:
              <li>
                Basic Java <br /> The module explores the fundamentals of Java
                programming and Object Oriented programming The Basic Java
                module provides students with a solid foundation in Java
                programming, catering to both beginners and those with limited
                prior experience in coding. Throughout this module, students
                will embark on a journey to master the essential concepts of
                Java, ultimately enabling them to critically analyze code,
                understand object-oriented programming principles, and construct
                basic Java applications. <span>12 ECTS</span>
              </li>
              <li>
                Advanced Java
                <br /> The module presents the techniques for good Java
                programming, and the Java Framework API The Advanced Java module
                is designed to empower students with a deeper understanding of
                the Java programming language, equipping them with the expertise
                needed to tackle complex software projects and leverage
                Java&#39;s rich ecosystem effectively. Throughout this module,
                students will master advanced Java concepts and frameworks,
                enabling them to critically analyze and apply their knowledge to
                real-world software development scenarios. <span>12 ECTS</span>
              </li>
              <li>
                DBMS and SQL
                <br /> The module defines the techniques for the data
                persistence and for data access via the Structured Query
                Language The DBMS and SQL module offers a comprehensive
                exploration of Database Management Systems (DBMS) and Structured
                Query Language (SQL). Designed for students pursuing a deeper
                understanding of data management and database design, this
                module equips them with the skills required to critically
                analyze data relations, plan and implement databases on a
                Relational Database Management System (RDBMS), and employ
                advanced SQL commands effectively. <span>12 ECTS</span>
              </li>
              <li>
                Access to Databases from Applications
                <br /> The module defines the techniques remote accesso to
                persistent data from a Java application The Access to Databases
                from Applications module offers students a comprehensive
                exploration of the critical intersection between application
                development and database management. This module equips students
                with the skills and knowledge required to effectively access,
                manipulate, and manage data stored in Relational Database
                Management Systems (RDBMS) from Java applications. Through this
                course, students will gain a deep understanding of access
                control, access control systems, and the use of the Java
                Persistence API (JPA) framework. <span>12 ECTS</span>
              </li>
              <li>
                Web Applications
                <br /> Module covers implementation of the full software web
                application project, back-end, front- end and management of
                third-party systems used for data persistence The Web
                Applications module provides students with an in-depth
                exploration of the technologies and principles behind modern web
                development. Students will develop a profound understanding of
                web application architecture, design patterns, and the
                intricacies of web protocols. This module equips them with the
                skills and critical knowledge necessary to design, develop, and
                deploy web-based software systems, with a specific focus on the
                J2EE framework and the Java Spring Framework.{" "}
                <span>12 ECTS</span>
              </li>
              <li>
                Research Methods <span>6 ECTS</span>
              </li>
              <li>
                Dissertation
                <br /> The dissertation is a compulsory element of Master of
                Science in Java Programming. Dissertation is based on a major
                piece of work that involves applying material encountered in the
                taught component of the degree, and extending that knowledge
                with the student&#39;s contribution, under the guidance of a
                supervisor. This component of the Master’s degree provides an
                opportunity for students to pursue a single topic in depth and
                to demonstrate evidence of research ability at a Masters level.
                The topic is typically a current problem in the broad area of
                their MSc programme. The dissertation usually involves
                experimental or theoretical research, or a substantial
                literature survey on a specific topic. <span>24 ECTS</span>
              </li>
            </ul>
            <h6>
              Total:{" "}
              <span style={{ textDecoration: "underline" }}>90 ECTS</span>
            </h6>
            <p>
              Programme can be delivered full and/or part time depending on the
              availability of students.
            </p>
            <ul>
              Part-time: 32 Months
              <li>Semester 1 Module 1, 2</li>
              <li>Semester 2 Module 3, 4</li>
              <li>Semester 3 Module 5</li>
              <li>Semester 4 Module 6 + Dissertation kick off</li>
              <li>Semester 5 complete dissertation</li>
            </ul>
            <ul>
              Full- Time: 18 Months
              <li>Semester 1 Module 1, 2, 3, 4</li>
              <li>Semester 2 Module 5, 6 + Dissertation kick off</li>
              <li>Semester 3 complete dissertation</li>
            </ul>
            <h6>
              Price: <span>€ 3,000</span>
            </h6>
            <p>
              eGO Education and its degree programmes are fully accredited by
              the Malta Further and Higher Education Authority (MFHEA). With
              this accreditation your degree programmes can be recognised in
              many countries. This allows you to further your studies in
              different countries and you can have your skills and competences
              acknowledged within a wider geographical labour market. The
              participation of Malta in the Qualifications Framework of the
              European Higher Education Area implies that your degree can be
              recognised in the 49 member states of the European Higher
              Education Area (EHEA) including all members of the European Union,
              the European Economic Area plus eight Eurasian countries.
              Similarly, Malta´s participation in the Transnational
              Qualifications Framework allows your degree to be recognised in 31
              member states of the Commonwealth in Africa, Asia, Caribbean,
              Europe, and the Pacific regions.
            </p>
          </Modal.Body>
        </Modal>
      </>
      <>
        <Button variant="primary" onClick={() => setShow2(true)}>
          Custom Width Modal
        </Button>

        <Modal
          show={show2}
          onHide={() => setShow2(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size="lg"
          className="offer_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Master of Science in Information Security
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The aim of the course is to acquire critical and in deep knowledge
              and skills needed to define IT security strategy, to implement
              corporate asset protection programs, and to develop and implement
              processes about IT risks mitigation. Students will develop an
              advanced knowledge of information security and an awareness of the
              context in which information security operates in terms of safety,
              environmental, social, and economic aspects. They will also gain a
              wide range of intellectual, practical and transferable skills,
              enabling them to develop a flexible professional career in IT and
              IS.
              <br /> This programme connects various disciplines, from computer
              science, mathematics and business, to design and critically
              analyse concepts, mechanisms and technologies used in the depth
              and breadth of cyber security.
            </p>
            <ul>
              Career:
              <li>Information Security Manager</li>
              <li>Information Security Officer</li>
              <li>Information Security Analyst</li>
              <li>Information Security Consultant</li>
              <li>Managers</li>
              <li>Business leaders</li>
              <li>Policy makers</li>
            </ul>
            <span>Entry Requirements</span>
            <ul>
              Applicants are required to have a:
              <li>
                Minimum Level 5 qualification or equivalent in either Computer
                Science, Electrical or Electronic Engineering, Mathematics,
                Physics, related disciplines with demonstrable exposure to
                programming and mathematics or other alternative subjects
                related to data analysis, data science or informatics, or a
                recognized equivalent international qualification.
              </li>
              <li>
                Relevant work experience in the IT Security sector might be
                considered if an applicant doesn’t meet level 5these
                requirements.
              </li>
              <li>IELTS 6.0 or equivalent</li>
            </ul>
            <span>Methodology</span>
            <p>
              The programme comprises an online interactive approach promoting
              the building of a community of practice via peer-to-peer learning
              through which is asynchronous online discussions and group-based
              assignments. Students have the freedom and flexibility to access
              the course at a time which is most convenient to them.
            </p>
            <ul>
              Modules:
              <li>
                Governance and Risk Management
                <br />
                The module explores the Risk Management and Governance
                techniques inherent in securing a company’s IT systems. The aim
                of the module is to study in depth knowledge needed by an IT
                managing professional for defining the IT security plan and
                strategy, to implement corporate asset protection programs, and
                to develop and implement processes about IT risks mitigation.
                Students of this module will analyse the information security
                changes, trends, and best practices and cover the information
                security compliance process and procedures. <span>12 ECTS</span>
              </li>
              <li>
                Information Security, Controls, Compliance and Audit Management
                <br /> The module presents the techniques for identifying
                critical issues, defining documentation and collecting data for
                securing IT systems. This module presents the techniques used
                for verifying security and focuses on the areas related to
                Information Security Controls, Compliance, and Audit Management.
                The students of this module will critically analyse the concepts
                of corporate security, its design and implementation to be able
                to design effective information systems controls that align with
                operational processes and objectives. In addition, students will
                gain critical understanding and ability to analyse the IT audit
                process and IT audit standards. <span>12 ECTS</span>
              </li>
              <li>
                Security Programme Management and Operations
                <br /> The module defines the techniques for the realization and
                qualitative management of an IT project in the security field.
                This module explores Security Programme Management &amp;
                Operations covering the development and implementation
                methodologies of an IT security project from a project
                management point of view. The students of this module will be
                exposed to critically analyse project management scope,
                practices and controls, point out the activities needed to
                successfully execute the information systems programme, estimate
                activity duration, and develop a schedule and staffing plan. The
                content will also cover incompatibilities, challenges, or issues
                related to project and vendors and how to manage stakeholders’
                expectations. <span>12 ECTS</span>
              </li>
              <li>
                Information Security Core Competencies
                <br /> The module defines the techniques for “physical”
                management of security, identification of roles, policies etc.
                in the security field. The module covers Information Security
                Core Competencies and explores the methods for identifying
                useful technologies for securing IT. The objective of this
                module is to gain the critical understanding and in-depth
                knowledge of criteria for mandatory and discretionary access
                control, and to understand the different factors that help in
                implementation of access controls and design an access control
                plan. Students will also evaluate various social engineering
                concepts and their role in insider attacks and develop best
                practices to counter social engineering attacks.{" "}
                <span>12 ECTS</span>
              </li>
              <li>
                Strategic Planning and Finance
                <br /> The module covers implementation of the IT project,
                compliance with regulations and management of third-party
                systems used for security management. This module explores the
                administrative part of an IT security project; defines the
                strategic objectives, relations with suppliers, compliance with
                regulations, budget management, relations with stakeholders. The
                objective of this module is to develop in-depth understanding
                and critical knowledge of organization’s objectives, strategic
                plans and targets that support the operational needs of the
                organization including the assessment of potential risks, linked
                to the forecasting ability of future scenarios. The students
                will also identify how to report financial metrics to
                stakeholders. They will evaluate different procurement such as
                Statement of Objectives (SOO), Statement of Work (SOW), and
                Total Cost of Ownership (TCO).
                <span>12 ECTS</span>
              </li>
              <li>
                Research Methods <span>6 ECTS</span>
              </li>
              <li>
                Dissertation
                <br />
                The dissertation is a compulsory element of Master of Science in
                Information Security. Dissertation is based on a major piece of
                work that involves applying material encountered in the taught
                component of the degree, and extending that knowledge with the
                student&amp;#39;s contribution, under the guidance of a
                supervisor. This component of Masters degree provides
                opportunity for students to pursue a single topic in depth and
                to demonstrate evidence of research ability at a Masters level.
                The topic is typically a current problem in the broad area of
                their MSc programme. The dissertation usually involves
                experimental or theoretical research, or a substantial
                literature survey on a specific topic.
                <span>24 ECTS</span>
              </li>
            </ul>
            <h6>
              Total:{" "}
              <span style={{ textDecoration: "underline" }}>90 ECTS</span>
            </h6>
            <p>
              Programme can be delivered full and/or part time depending on the
              availability of students.
            </p>
            <ul>
              Part-time: 32 Months
              <li>Semester 1 Module 1, 2</li>
              <li>Semester 2 Module 3, 4</li>
              <li>Semester 3 Module 5</li>
              <li>Semester 4 Module 6 + Dissertation kick off</li>
              <li>Semester 5 complete dissertation</li>
            </ul>
            <ul>
              Full- Time: 18 Months
              <li>Semester 1 Module 1, 2, 3, 4</li>
              <li>Semester 2 Module 5, 6 + Dissertation kick off</li>
              <li>Semester 3 complete dissertation</li>
            </ul>
            <h6>
              Price: <span>€ 3,000</span>
            </h6>
          </Modal.Body>
        </Modal>
      </>
      <>
        <Button variant="primary" onClick={() => setShow2(true)}>
          Custom Width Modal
        </Button>

        <Modal
          show={show3}
          onHide={() => setShow3(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size="lg"
          className="offer_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              BUSINESS ADMINISTRATION
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The 3-year Degree Course in Business Administration provides
              students with a training that meet the needs of different types of
              businesses. The skills acquired by graduates during their studies
              may, in fact, flexibly match the majority of requests coming from
              the world of work. This degree course offers to students the
              possibility to acquire diverse skill sets in the
              organisational-management, administrative-financial and banking
              credit sectors. Taking into account personal interests and
              attitudes, the students will deepen the scope of the main company
              functions, with particular reference to accounting, planning,
              control, organisational, legal and tax activities, with specific
              regard to the small and medium-sized companies. The students may
              alternatively choose amongst modules concerning corporate finance,
              the structure and functioning of the financial markets and the
              credit system as well. Professional activities range from
              administrative and/or financial functions up to those related to
              organisation, production and marketing.
            </p>
            <ul>
              Career:
              <li>Accountant</li>
              <li>Bursar and Treasurer</li>
              <li>Condominium and Building Administrator</li>
              <li>
                Organization and Management of Production Factors Technician
              </li>
              <li>Insurance Agent</li>
              <li>Sales and Distribution Technician</li>
              <li>Marketing Technician</li>
            </ul>
            <span>Entry Requirements</span>
            <ul>
              Applicants are required to have a:
              <li>
                A valid and recognised high school diploma, irrespective of
                country of conferment, achieved after at least 12 years of
                schooling.
              </li>
              <li>
                It is also required a basic knowledge corresponding to the
                average level acquired through school education at upper
                secondary education level. The assessment of the basic knowledge
                will occur according to the methods indicated in the Academic
                Regulations of the course of reference.
              </li>
            </ul>
            <span>Traineeship</span>
            <p>
              Pegaso International’s traineeships are integral part of the
              student academic curriculum, and are provided as practical
              activities of the academic record relevant to the completion of
              the study course. Traineeships may be mandatory or recognized as
              processes through which students may gain exemptions of credits.
              The number of credits gained for curricular traineeships is stated
              in the Standard Study Plans. Traineeship activities are officially
              recognised through the acknowledgement of credits (1 ECTS = 8
              hours). Generally, the working hours are mutually agreed upon
              between the trainee and the host company, considering the current
              needs of both parties and the company working hours. Students may
              undertake the traineeship at any time of the year.
            </p>
            <span>Learning Outcomes</span> <br />
            <ul>
              The learner will be able to:
              <li>
                Demonstrate managerial, consulting and business administration
              </li>
              <li>
                Explain the difference between private and public organizations
              </li>
              <li>
                Illustrate the functioning of modern business organizations and
                financial systems
              </li>
              <li>
                Developing appropriate methods of analysis and critical
                interpretation of the structures and dynamics of companies
              </li>
              <li>
                Express specific aspects of leadership, management and business
                administration
              </li>
              <li>
                Identify specific types of businesses and financial
                intermediation
              </li>
              <li>
                Develop appropriate methods of analysis and critical
                interpretation of the structures and dynamics of companies
              </li>
              <li>Support the principles of sustainability</li>
              <li>
                Combine the use of statistical tools and principles with the
                administration of businesses.
              </li>
            </ul>
            <h6>
              Total:{" "}
              <span style={{ textDecoration: "underline" }}>180 ECTS</span>
            </h6>
            <span>Admission Requirements</span>
            <ul>
              Students will be considered eligible for admission for a
              traineeship, upon the positive assessment of a minimum number of
              ECTS, with reference to:
              <li>Three-year degree courses: 100 ECTS out of 180</li>
              <li>Master’s degree courses: 50 ECTS out of 120</li>
              <li>
                one-year master degree course in Informatics: 20 ECTS out of 90
              </li>
              <ul>
                Students are required to reach specific agreements with the host
                company and communicate the following data in writing to Pegaso
                International to the mail: traineeship@pegasointernational.eu
              </ul>
              <li>Name of the Host company</li>
              <li>Agreed time frame of the traineeship</li>
              <li>
                Name and surname of the company tutor and relevant contact
                details (telephone and email)
              </li>
              <li>
                Educational objectives of the traineeship, agreed with the
                company tutor
              </li>
            </ul>
            <h6>
              Price: <span>€ 3,000</span>
            </h6>
          </Modal.Body>
        </Modal>
      </>
      <>
        <Button variant="primary" onClick={() => setShow2(true)}>
          Custom Width Modal
        </Button>

        <Modal
          show={show4}
          onHide={() => setShow4(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size="lg"
          className="offer_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              SPORT SCIENCE
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The 3-year Degree Course in Sport Sciences aims to provide
              students with knowledge and skills suitable for managing,
              performing and assessing sport individual and group activities of
              a compensatory, adapted, educational, recreational and playful
              nature. The course programme provides a first academic year aimed
              at the acquisition of anatomical, biochemical and physiological
              knowledge needed to understand how basically the human body in
              motion works. The second academic year is, instead, focused on the
              teaching of motor and sports activities, as well as the knowledge
              of sport sciences and its connections with health. The activities
              of the third academic year are aimed at understanding theoretical
              and practical aspects of sport training, as well as the functional
              and nutritional assessment of the athlete and the subject trained,
              or of the leisure-time motor and sport activities , the
              environmental quality and safety in sports facilities, of
              orthopedics and traumatology of sport and movement, and all the
              legal and economic foundations of the structure and sports
              organisations.
            </p>
            <ul>
              Career:
              <li>Trainers of non-competitive sport disciplines.t</li>
              <li>Organizers of events and sports facilities.</li>
              <li>Sports observers.</li>
              <li>Sport coaches and technicians.</li>
            </ul>
            <span>Entry Requirements</span>
            <ul>
              Applicants are required to have a:
              <li>
                A valid and recognised high school diploma, irrespective of
                country of conferment, achieved after at least 12 years of
                schooling.
              </li>
              <li>
                It is also required a basic knowledge corresponding to the
                average level acquired through school education at upper
                secondary education level. The assessment of the basic knowledge
                will occur according to the methods indicated in the Academic
                Regulations of the course of reference.
              </li>
            </ul>
            <span>Educational Objectives</span> <br />
            <ul>
              Standard Specialisation
              <li>
                To effectively use, both in written and oral form, at least one
                official language of the European Union, in addition to Italian,
                for the exchange of general information in the field of
                competence.
              </li>
              <li>Achieve adequate skills and tools for communication</li>
              <li>
                work both in a team and independently, and to quickly enter in
                the workplace.
              </li>
              <span>
                For the above-mentioned purposes, the curriculum of this degree
                course:
              </span>
              <li>
                Includes teachings and activities in the biomedical,
                psycho-pedagogical and organizational fields, both in their
                basic aspects and through disciplines characterized in relation
                to specific course objectives.
              </li>
              <li>
                Is further characterized by teachings directly related to motor
                and sports activities.
              </li>
              <li>
                Provides, in line with its specific objectives, the in-depth
                study of some the modules and activities planned and internships
                at: sports facilities and organisations, companies, public
                administration entities and laboratories, as well at Italian and
                foreign Institutions, of affiliated by the stipulation of
                international agreements.
              </li>
              <span>
                In order to manage internships and traineeships aimed at
                carrying out physical exercises and practical technical
                activities, the Institution has signed agreements with
                affiliated associations and companies, such as:
              </span>
              <li>CONI (The Italian National Olympic Committee)</li>
              <li>
                NEUROMED (Mediterranean Neurological Institute), a leading
                medical-scientific-hospital and research group, for research and
                activities in the medical-scientific areas.
              </li>
              <span>
                Such agreements have been entered into order to support the
                Institution in the activities related to highly specialised
                laboratories, IT and technological systems, personalised study
                plans, as well as traineeships and internships.
              </span>
              <br />
              <span>Bio-health specialisation</span>
              <li>
                Achieve all the knowledge and the competences used for the
                development of a wild range professional activities connected to
                the sport sector.
              </li>
              <li>
                Develop appropriate organization and managerial capabilities
                together with the communicative and relational ones.
              </li>
              <li>
                Demonstrate understanding of global, societal, environmental,
                and sustainability issues related to sport sector.
              </li>
              <li>
                Exhibit effective communication, teamwork, entrepreneurial, and
                leadership skill.
              </li>
              <li>
                Achieve all the adequate competences for the organization and
                the management of scientific, cultural and sporting events and
                public performances of local national and international level.
              </li>
              <li>
                Have adequate knowledge and instruments for the communication
                and the management of information in a specific field of
                competence
              </li>
            </ul>
            <span>Job Opportunities</span> <br />
            <ul>
              Standard Specialisation
              <li>
                Management, conduction and evaluation of individual and group
                motor activities of a compensatory, adaptive, educational,
                recreational and sports nature aimed at maintaining
                psycho-physical well-being through the promotion of active
                lifestyles
              </li>
              <li>
                Management, conduction and evaluation of individual and group
                fitness activities.
              </li>
              <span>Bio-health specialisation</span>
              <li>
                Operator in education for the prevention of common health risk
                factors, such as sedentary lifestyle, overweight and obesity.
              </li>
              <li>
                Manager of physical, sports and leisure activities, divided by
                various age groups (young, adult, elder).
              </li>
              <li>
                Trainer expert in planning and managing personalised training
                programs.
              </li>
              <li>
                Technical-sports educator for activities aimed at achieving and
                maintaining the efficiency of physical and psychophysical
                measurement.
              </li>
              <li>
                Technical-sports educator in the management of motor and sport
                activities, supported and enhanced by the use of specific
                equipment (fitness – wellness).
              </li>
              <li>
                Consultant and Manager of both private and public sports clubs,
                wellness centres and gyms. Consultant for facilities and sport
                facilities in the area.
              </li>
              <li>Personal and team trainer.</li>
            </ul>
            <h6>
              Total:{" "}
              <span style={{ textDecoration: "underline" }}>180 ECTS</span>
            </h6>
            <h6>
              Price: <span>€ 3,000</span>
            </h6>
          </Modal.Body>
        </Modal>
      </>
      <div className="achievements_header">
        <div className="achievements_headline_div">
          <h1 data-aos={"zoom-in-up"} className="achievements_thought">
            {" "}
            OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
          </h1>
        </div>
      </div>
      <div className="achievements_heading">
        <div
          data-aos={"fade-right"}
          data-aos-delay={"700"}
          className="achievements_line_1"
        ></div>
        <div>
          <h1
            data-aos={"zoom-out"}
            data-aos-delay={"1200"}
            className="achievements_title"
          >
            OUR COURSES
          </h1>
        </div>
        <div
          data-aos={"fade-left"}
          data-aos-delay={"700"}
          className="achievements_line_2"
        ></div>
      </div>
      {/* <div>
        <h1 className="title" data-aos={"zoom-out"} data-aos-delay={"1600"}>
          MASTER DEGREES
        </h1>
        <div className="achievement_container right">
          <div
            data-aos-delay={"0"}
            data-aos={"fade-left"}
            className="achievement_content_container"
          >
            <div className="achievements_contents">
              <h2>Master of Science in Java Programming</h2>
              <div className="achievement_devicer"></div>
              <p>
                The aim of the course is to allow students to deal with the
                entire software development cycle, from the analysis of customer
                needs to the structuring of the database, from the design of the
                user interface to the construction of the back end using Object
                Oriented programming model and the Java language.
              </p>
              <div className="achievement_devicer"></div>
              <p>DURATION: 18 Months</p>
              <p>FEES: €3,000</p>
              <div className="achievement_buttons">
                <button className="offer_readmore_btn" onClick={openModal}>
                  <div>READ MORE</div>
                </button>
                <button className="offer_readmore_btn">
                  <NavLink activeclassname="active" aria-current="page" to="#">
                    <div>COURSES</div>
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="achievement_image_conainer">
              <img
                loading="lazy"
                decoding="async"
                className="achievement_image"
                src={java}
                alt=""
              />
            </div>
          </div>
          <div
            data-aos-delay={"0"}
            data-aos={"fade-left"}
            className="achievement_content_container"
          >
            <div className="achievements_contents">
              <h2>Master of Science in Information Security</h2>
              <div className="achievement_devicer"></div>
              <p>
                The aim of the course is to acquire critical and in deep
                knowledge and skills needed to define IT security strategy, to
                implement corporate asset protection programs, and to develop
                and implement processes about IT risks mitigation. Students will
                develop an advanced knowledge of information security and an
                awareness of the context in which information security operates
                in terms of safety, environmental, social, and economic aspects.
                They will also gain a wide range of intellectual, practical and
                transferable skills, enabling them to develop a flexible
                professional career in IT and IS. This programme connects
                various disciplines, from computer science, mathematics and
                business, to design and critically analyse concepts, mechanisms
                and technologies used in the depth and breadth of cyber
                security.
              </p>
              <div className="achievement_devicer"></div>
              <p>DURATION: 32 Months</p>
              <p>FEES: €3,000</p>
              <div className="achievement_buttons">
                <button
                  className="offer_readmore_btn"
                  onClick={() => setShow2(true)}
                >
                  <div>READ MORE</div>
                </button>
                <button className="offer_readmore_btn">
                  <NavLink activeclassname="active" aria-current="page" to="#">
                    <div>COURSES</div>
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="achievement_image_conainer">
              <img
                loading="lazy"
                decoding="async"
                className="achievement_image"
                alt=""
                src={security}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="achievements_heading">
        <div
          data-aos={"fade-right"}
          data-aos-delay={"700"}
          className="achievements_line_1"
        ></div>
        <div className="featured_courses">
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="achievements_title"
            >
              FEATURED COURSES
            </h1>
          </div>
          <img src={pegaso} />
        </div>

        <div
          data-aos={"fade-left"}
          data-aos-delay={"700"}
          className="achievements_line_2"
        ></div>
      </div>
      <div>
        <h1 className="title" data-aos={"zoom-out"} data-aos-delay={"1600"}>
          BACHELOR'S DEGREES
        </h1>
        {achievements.map((a, i) => {
          return (
            <div className="achievement_container right" key={i}>
              <div
                data-aos-delay={"0"}
                data-aos={"fade-left"}
                className="achievement_content_container"
              >
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                  <div className="achievement_devicer"></div>
                  <p>{a.offer_duration}</p>
                  <p>{a.offer_fees}</p>
                  <div className="achievement_buttons">
                    <button className="offer_readmore_btn">
                      <NavLink
                        activeclassname="active"
                        aria-current="page"
                        to={a.offer_link}
                      >
                        <div>READ MORE</div>
                      </NavLink>
                    </button>
                    <button className="offer_readmore_btn">
                      <NavLink
                        activeclassname="active"
                        aria-current="page"
                        to={a.course_link}
                      >
                        <div>COURSES</div>
                      </NavLink>
                    </button>
                  </div>
                </div>
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="title" data-aos={"zoom-out"} data-aos-delay={"0"}>
          MASTER DEGREES
        </h1>
        {master.map((a, i) => {
          return (
            <div className="achievement_container right">
              <div
                data-aos-delay={"0"}
                data-aos={"fade-left"}
                className="achievement_content_container"
              >
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                  <div className="achievement_devicer"></div>
                  <p>{a.offer_duration}</p>
                  <p>{a.offer_fees}</p>
                  <div className="achievement_buttons">
                    <button className="offer_readmore_btn">
                      <NavLink
                        activeclassname="active"
                        aria-current="page"
                        to={a.offer_link}
                      >
                        <div>READ MORE</div>
                      </NavLink>
                    </button>
                    <button className="offer_readmore_btn">
                      <NavLink
                        activeclassname="active"
                        aria-current="page"
                        to={a.course_link}
                      >
                        <div>COURSES</div>
                      </NavLink>
                    </button>
                  </div>
                </div>
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="title" data-aos={"zoom-out"} data-aos-delay={"0"}>
          ENGLISH LANGUAGE COURSES
        </h1>
        {English.map((a, i) => {
          return (
            <div className="achievement_container right">
              <div
                data-aos-delay={"0"}
                data-aos={"fade-left"}
                className="achievement_content_container"
              >
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                  <div className="achievement_devicer"></div>
                  <p>{a.offer_duration}</p>
                  <p>{a.offer_fees}</p>
                  <div className="achievement_buttons">
                    <button className="offer_readmore_btn">
                      <NavLink
                        activeclassname="active"
                        aria-current="page"
                        to={a.offer_link}
                      >
                        <div>READ MORE</div>
                      </NavLink>
                    </button>
                    <button className="offer_readmore_btn">
                      <NavLink
                        activeclassname="active"
                        aria-current="page"
                        to={a.course_link}
                      >
                        <div>COURSES</div>
                      </NavLink>
                    </button>
                  </div>
                </div>
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="achievements_body">
        {/* <div class="list-wrapper">
          <div class="list-container">
            <div class="list-header-container">
              <a href="#list-0" class="back-link" onClick={onBackClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000"
                  class="bi bi-caret-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                </svg>
              </a>
              <h3>PROGRAMS</h3>
            </div>
            <div class="list-body-container">
              <ul id="list-0" class="list-0 active-list">
                <li class="list-0-item">
                  <a
                    href="#list-1"
                    id="list"
                    class="list-link"
                    onClick={onLinkClick}
                  >
                    <span class="list-link-label">eGO</span>
                    <span class="right-arrow">&gt;</span>
                  </a>
                  <ul id="list-1" class="list hidden">
                    <li class="list-item">
                      <a href="#list-1-1" id="list-1-1-1" class="list-link">
                        <span class="list-link-label">MASTER</span>
                        <span class="right-arrow">&gt;</span>
                      </a>
                      <ul id="list-1-1" class="list  hidden">
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Lorem ipsum.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Inventore, id.</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="list-0-item">
                  <a href="#list-2" class="list-link">
                    <span class="list-link-label">Peggaso</span>
                    <span class="right-arrow">&gt;</span>
                  </a>
                  <ul id="list-2" class="list hidden">
                    <li class="list-item">
                      <a href="#list-2-1" class="list-link">
                        <span class="list-link-label">BACHELOR</span>
                        <span class="right-arrow">&gt;</span>
                      </a>
                      <ul id="list-2-1" class="list hidden">
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Lorem ipsum.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">
                              Non, accusantium!
                            </span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">
                              Itaque, adipisci!
                            </span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Nemo, eligendi.</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="list-item">
                      <a href="#list-2-2" class="list-link">
                        <span class="list-link-label">MASTER</span>
                        <span class="right-arrow">&gt;</span>
                      </a>
                      <ul id="list-2-2" class="list hidden">
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Lorem ipsum.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Pariatur, quas!</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Fugit, soluta.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">
                              Beatae, doloribus.
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="achievements_lists">
          <div class="courses">
            <div class="course html checked" tabindex="1">
              <div class="course-info">
                <span>Master Degree</span>
                <h5>Master of Science in Java Programming</h5>
              </div>
              <div class="course-more">
                <div class="details">
                  <h5>Description</h5>
                </div>
                <p class="description">
                  The aim of the course is to allow students to deal with the
                  entire software development cycle, from the analysis of
                  customer needs to the structuring of the database, from the
                  design of the user interface to the construction of the back
                  end using Object Oriented programming model and the Java
                  language.
                </p>
                <button
                  onClick={() => setShow(true)}
                  class="read-btn"
                  tabindex="3"
                >
                  Read more
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="course html checked" tabindex="4">
              <div class="course-info">
                <span>Master Degree</span>
                <h5>Master of Science in Information Security</h5>
              </div>
              <div class="course-more">
                {/* <div class="details">
                  <h5>Lesson 2</h5>
                  <span class="time">4 min.</span>
                </div> */}
                <p class="description">
                  The aim of the course is to acquire critical and in deep
                  knowledge and skills needed to define IT security strategy, to
                  implement corporate asset protection programs, and to develop
                  and implement processes about IT risks mitigation. Students
                  will develop an advanced knowledge of information security and
                  an awareness of the context in which information security
                  operates in terms of safety, environmental, social, and
                  economic aspects.
                </p>
                {/* <button class="read-btn mark" tabindex="5">
                  Mark as Incomplete
                </button> */}
                <button
                  class="read-btn"
                  tabindex="6"
                  onClick={() => setShow2(true)}
                >
                  Read More
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="achievements_heading">
        <div
          data-aos={"fade-right"}
          data-aos-delay={"700"}
          className="achievements_line_1"
        ></div>
        <div>
          <h1
            data-aos={"zoom-out"}
            data-aos-delay={"1200"}
            className="achievements_title"
          >
            Featured Courses
          </h1>
        </div>
        <div
          data-aos={"fade-left"}
          data-aos-delay={"700"}
          className="achievements_line_2"
        ></div>
      </div>
      <div className="achievements_body">
        {/* <div class="list-wrapper">
          <div class="list-container">
            <div class="list-header-container">
              <a href="#list-0" class="back-link" onClick={onBackClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000"
                  class="bi bi-caret-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                </svg>
              </a>
              <h3>PROGRAMS</h3>
            </div>
            <div class="list-body-container">
              <ul id="list-0" class="list-0 active-list">
                <li class="list-0-item">
                  <a
                    href="#list-1"
                    id="list"
                    class="list-link"
                    onClick={onLinkClick}
                  >
                    <span class="list-link-label">eGO</span>
                    <span class="right-arrow">&gt;</span>
                  </a>
                  <ul id="list-1" class="list hidden">
                    <li class="list-item">
                      <a href="#list-1-1" id="list-1-1-1" class="list-link">
                        <span class="list-link-label">MASTER</span>
                        <span class="right-arrow">&gt;</span>
                      </a>
                      <ul id="list-1-1" class="list  hidden">
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Lorem ipsum.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Inventore, id.</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="list-0-item">
                  <a href="#list-2" class="list-link">
                    <span class="list-link-label">Peggaso</span>
                    <span class="right-arrow">&gt;</span>
                  </a>
                  <ul id="list-2" class="list hidden">
                    <li class="list-item">
                      <a href="#list-2-1" class="list-link">
                        <span class="list-link-label">BACHELOR</span>
                        <span class="right-arrow">&gt;</span>
                      </a>
                      <ul id="list-2-1" class="list hidden">
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Lorem ipsum.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">
                              Non, accusantium!
                            </span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">
                              Itaque, adipisci!
                            </span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Nemo, eligendi.</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="list-item">
                      <a href="#list-2-2" class="list-link">
                        <span class="list-link-label">MASTER</span>
                        <span class="right-arrow">&gt;</span>
                      </a>
                      <ul id="list-2-2" class="list hidden">
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Lorem ipsum.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Pariatur, quas!</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">Fugit, soluta.</span>
                          </a>
                        </li>
                        <li class="list-item">
                          <a href="#" class="list-link">
                            <span class="list-link-label">
                              Beatae, doloribus.
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="achievements_lists">
          <div class="courses">
            <div class="course pegaso html checked" tabindex="1">
              <div class="course-info">
                <span>bachelor degree</span>
                <h5>BUSINESS ADMINISTRATION</h5>
              </div>
              <div class="pegaso course-more">
                {/* <div class="details">
                  <h5>Lesson 1</h5>
                </div> */}
                <p class="pegaso description">
                  The 3-year Degree Course in Business Administration provides
                  students with a training that meet the needs of different
                  types of businesses.
                </p>
                <button
                  onClick={() => setShow3(true)}
                  class="read-btn"
                  tabindex="3"
                >
                  Read more
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="course html pegaso checked" tabindex="4">
              <div class="course-info">
                <span>bachelor degree</span>
                <h5>SPORT SCIENCE</h5>
              </div>
              <div class="pegaso course-more">
                {/* <div class="details">
                  <h5>Lesson 2</h5>
                  <span class="time">4 min.</span>
                </div> */}
                <p class="description">
                  The 3-year Degree Course in Sport Sciences aims to provide
                  students with knowledge and skills suitable for managing,
                  performing and assessing sport individual and group activities
                  of a compensatory.
                </p>
                {/* <button class="read-btn mark" tabindex="5">
                  Mark as Incomplete
                </button> */}
                <button
                  class="read-btn"
                  tabindex="6"
                  onClick={() => setShow4(true)}
                >
                  Read More
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="course pegaso checked html" tabindex="7">
              <div class="course-info">
                <span>bachelor degree</span>
                <h5>EDUCATIONAL SCIENCES</h5>
              </div>
              <div class="pegaso course-more">
                {/* <div class="details">
                  <h5>Lesson 3</h5>
                  <span class="time">4 min.</span>
                </div> */}
                <p class="description">
                  The 3-year bachelor degree course in Educational Sciences is
                  aimed at acquiring the basic and methodological skills
                  concerning pedagogical and didactic knowledge.
                </p>
                {/* <button class="read-btn mark" tabindex="8">
                  Mark as Done
                </button> */}
                <button class="read-btn" tabindex="9">
                  Read More
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="course pegaso checked html" tabindex="7">
              <div class="course-info">
                <span>bachelor degree</span>
                <h5>CIVIL ENGENEERING</h5>
              </div>
              <div class="pegaso course-more">
                {/* <div class="details">
                  <h5>Lesson 3</h5>
                  <span class="time">4 min.</span>
                </div> */}
                <p class="description">
                  The areas of interest related to this 3-year bachelor Degree
                  course in Civil Engineering are construction and
                  infrastructures.
                </p>
                {/* <button class="read-btn mark" tabindex="8">
                  Mark as Done
                </button> */}
                <button class="read-btn" tabindex="9">
                  Read More
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="course pegaso checked html" tabindex="7">
              <div class="course-info">
                <span>MASTER DEGREE</span>
                <h5>INFORMATICS</h5>
              </div>
              <div class="pegaso course-more">
                {/* <div class="details">
                  <h5>Lesson 3</h5>
                  <span class="time">4 min.</span>
                </div> */}
                <p class="description">
                  Master of Science in Informatics is a 1-year master’s
                  programme for those who wish to continue studying Informatics
                  after completion of a bachelor’s degree programme.
                </p>
                {/* <button class="read-btn mark" tabindex="8">
                  Mark as Done
                </button> */}
                <button class="read-btn" tabindex="9">
                  Read More
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="course pegaso checked html" tabindex="7">
              <div class="course-info">
                <span>MASTER DEGREE</span>
                <h5>SUSTAINABLE DEVELOPEMENT</h5>
              </div>
              <div class="pegaso course-more">
                {/* <div class="details">
                  <h5>Lesson 3</h5>
                  <span class="time">4 min.</span>
                </div> */}
                <p class="description">
                  Sustainable Development is a fast growing discipline within
                  areas of study that complement such growth, thereby developing
                  in tandem.
                </p>
                {/* <button class="read-btn mark" tabindex="8">
                  Mark as Done
                </button> */}
                <button class="read-btn" tabindex="9">
                  Read More
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>3000 €</span>
                  </h5>
                </div>
              </div>
            </div>
            <div class="course pegaso checked html" tabindex="7">
              <div class="course-info">
                {/* <span>MASTER DEGREE</span> */}
                <h5>ENGLISH LANGUAGE COURSES</h5>
              </div>
              <div class="pegaso course-more">
                {/* <div class="details">
                  <h5>Lesson 3</h5>
                  <span class="time">4 min.</span>
                </div> */}
                <p class="description">
                  Pegaso International provides language training through its
                  internal Language Centre, a multilingual environment that
                  offers a range of English courses.
                </p>
                {/* <button class="read-btn mark" tabindex="8">
                  Mark as Done
                </button> */}
                <button class="read-btn" tabindex="9">
                  Read More
                </button>
                <div class="details">
                  <h5>
                    Fees: <span style={{ color: "white" }}>4000 €</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
