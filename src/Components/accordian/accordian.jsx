import { React, useState } from "react";
import "./accordian.css";
import ShapedWave from "../CustomWaveShape/ShapedWave";

const data = [
  // {
  //   question: "What is DRAIC-DYPCOE?",
  //   answer:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut soluta perferendis! Distinctio eaque voluptates saepe recusandae nisi, illum ullam? Ducimus maiores earum pariatur nesciunt quae, quaerat quidem, laborum minima corrupti, voluptate adipisci repellendus?",
  // },
  {
    question: "Who can join EGO-EDUCATION?",
    answer:
      "answer ",
  },
  {
    question: "how are PEGASO INTERNATIONAL?",
    answer:
      "answer",
  },
  {
    question: "What can you expect from EGO-EDUCATION?",
    answer:
      "answer",
  },
  // {
  //   question: "What are our working hours?",
  //   answer:
  //     "answer",
  // },
  {
    question: "Is there a fee requirement?",
    answer:
      "answer",
  },
];

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
    
      <div className="outerfaq">
      <div className="firstrow">
        <h1 data-aos={"zoom-out"} className="wheredowe">
          DO YOU HAVE SOME QUESTIONS
        </h1>
        <div className="seperator">
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"700"}
              id="aboutFAQ"
            >
              FAQ
            </h1>
          </div>
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            id="lineaboutus1FAQ"
          ></div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            id="lineaboutus2FAQ"
          ></div>
        </div>
        <div className="wrapper">
          <div className="accordion">
            {data.map((item, i) => (
              <div className="item">
                <div className="ac_title" onClick={() => toggle(i)}>
                  <h2 className="faq_question">{item.question}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <ShapedWave />
    </>
  );
};

export default Accordian;
