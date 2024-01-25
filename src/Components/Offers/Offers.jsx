import React, { useEffect, useState } from "react";
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
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShowModal(false)
  }

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
      <div>
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
      </div>
    </div>
  );
};

export default Main;
