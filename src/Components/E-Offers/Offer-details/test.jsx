import React from "react";
import "./Offer-details.css";

function OfferDetails(props) {
  const {
    title,
    imgUrl,
    description,
    program_sub_title_1,
    program_sub_title_2,
    program_sub_title_3,
    program_sub_title_4,
    program_sub_title_5,
    EducationalObjectives,
    LearningOutcomes,
    JobOpportunities,
    AdmissionRequirements,
    StudyPlan,
    Traineeship,
  } = props?.data;

  return (
    <>
      <div className="offer-details-page">
        <div className="offer-details-hero-container">
          <div className="offer-details-text-container">
            <h1 className="offer-details-title">{title}</h1>
            <p className="offer-details-description">{description}</p>

            {/* Educational Objectives */}
            {program_sub_title_1 && (
              <div className="content-pair">
                <div className="content-left">
                <h3 className="sub-title">{program_sub_title_2}</h3>
                  <p className="offer-details-description">
                    {LearningOutcomes?.Description}
                  </p>
                  <ul>
                    {LearningOutcomes?.Outcomes?.map((outcome, index) => (
                      <li key={index} id="offer-details-description-list">
                        <p>{outcome}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="content-right">
                  <h3 className="sub-title">{program_sub_title_1}</h3>
                  <p className="offer-details-description">
                    {EducationalObjectives?.Description}
                  </p>
                  <h3 className="sub-title">{program_sub_title_3}</h3>
                  <p className="offer-details-description">
                    {JobOpportunities?.Description}
                  </p>
                </div>
              </div>
            )}
              

            {/* Learning Outcomes */}
            {program_sub_title_2 && (
              <div className="content-pair">
                <div className="content-left">
                  <h3 className="sub-title">{program_sub_title_2}</h3>
                  <p className="offer-details-description">
                    {LearningOutcomes?.Description}
                  </p>
                  <ul>
                    {LearningOutcomes?.Outcomes?.map((outcome, index) => (
                      <li key={index} id="offer-details-description-list">
                        <p>{outcome}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="content-right">
                  <h3 className="sub-title">{program_sub_title_4}</h3>
                  <p className="offer-details-description">
                    {AdmissionRequirements?.Description}
                  </p>
                  <ul>
                    {AdmissionRequirements?.Requirements?.map(
                      (requirement, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{requirement}</p>
                        </li>
                      )
                    )}
                  </ul>
                  {AdmissionRequirements?.SecondDescription && (
                    <p className="offer-details-description">
                      {AdmissionRequirements.SecondDescription}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Study Plan */}
            <h3 className="sub-title">Study Plan:</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>A.Y.</th>
                  <th>Exam</th>
                  <th>ECTS</th>
                </tr>
              </thead>
              <tbody>
                {StudyPlan?.map((item, index) => (
                  <tr key={index}>
                    <td id="td">{item["A.Y."]}</td>
                    <td id="td">{item.Exam}</td>
                    <td id="td">{item.ECTS}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Traineeship */}
            {program_sub_title_5 && Traineeship && (
              <div className="content-pair">
                <div className="content-left">
                  <h3 className="sub-title">{program_sub_title_5}</h3>
                  <p className="offer-details-description">
                    {Traineeship?.Description}
                  </p>
                  <h3 className="sub-title">
                    {Traineeship.program_sub_title_6}
                  </h3>
                  <ul>
                    {Traineeship.AdmissionRequirements.Requirements.map(
                      (requirement, index) => (
                        <li
                          key={index}
                          id="offer-details-description-list"
                        >
                          <p>{requirement}</p>
                        </li>
                      )
                    )}
                  </ul>
                  <p className="offer-details-description">
                    {Traineeship.AdmissionRequirements.Description}
                  </p>
                  <ul>
                    {Traineeship.ApplicationProcess.DataToCommunicate.map(
                      (requirement, index) => (
                        <li
                          key={index}
                          id="offer-details-description-list"
                        >
                          <p>{requirement}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="content-right">
                  <h3 className="sub-title">
                    {Traineeship.program_sub_title_7}
                  </h3>
                  <p className="offer-details-description">
                    {Traineeship.Acknowledgement.Description}
                  </p>
                  <ul>
                    {Traineeship.Acknowledgement.Documentation.map(
                      (doc, index) => (
                        <li
                          key={index}
                          id="offer-details-description-list"
                        >
                          <p>{doc}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="offer-details-image-container">
            <img
              loading="lazy"
              decoding="async"
              src={imgUrl}
              className="offer-details-image"
              alt="departimg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferDetails;
