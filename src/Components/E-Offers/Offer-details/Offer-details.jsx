import React, { useEffect } from "react";
import "./Offer-details.css";
import MetaData from "../../../Data/MetaData";
import AOS from "aos";

function OfferDetails(props) {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const {
    title,
    imgUrl,
    CD,
    description,
    program_sub_title_1,
    program_sub_title_2,
    program_sub_title_3,
    program_sub_title_3j,
    Sports_sub_title_1,
    Sports_small_title,
    Sports_small_title2,
    BiohealthSpecialisation,
    StandardSpecialisation,
    program_sub_title_4,
    program_sub_title_5,
    EducationalObjectives,
    LearningOutcomes,
    JobOpportunities,
    JobOpportunitiesj,
    JobOpportunitiesS,
    Sports_jobs_opp,
    AdmissionRequirements,
    StudyPlan,
    Traineeship,
    Meta
  } = props?.data;

  return (
    <>
    <MetaData title={Meta}/>
      <div className="offer-details-page">
        <div className="offer-details-hero-container">
          <div className="offer-details-text-container">

            <div className="content-pair">
              <div  id="contentleft">
              <h1 className="offer-details-title" data-aos={"zoom-out"}
              >
                {title}
                </h1>
              <p className="offer-details-description" data-aos={"zoom-out"}>{description}</p>
              </div>
              {/* <div id="contentright" className="offer-details-image-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={imgUrl}
                      className="offer-details-image"
                      alt="departimg"
                    ></img>
                </div>  */}
            </div>


            {/* Sports science */}

            {Sports_sub_title_1 && (
              <div className="content-pair" >
                <div className="content-left" data-aos={"fade-left"}>
                  <h3 className="sub-title">{Sports_sub_title_1}</h3>
                  <h4 className="sub-title">{Sports_small_title}</h4>
                    <p className="offer-details-description">
                      {StandardSpecialisation?.Description}
                    </p>
                    <ul>
                      {StandardSpecialisation?.Outcomes?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="offer-details-description">
                      {StandardSpecialisation?.Description2}
                    </p>
                    <ul>
                      {StandardSpecialisation?.Outcomes2?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="offer-details-description">
                      {StandardSpecialisation?.Description3}
                    </p>
                    <ul>
                      {StandardSpecialisation?.Outcomes3?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="offer-details-description">
                      {StandardSpecialisation?.Description4}
                    </p>
                     <h4 className="sub-title">{Sports_small_title2}</h4>
                    <p className="offer-details-description">
                      {BiohealthSpecialisation?.Description}
                    </p>
                    <ul>
                      {BiohealthSpecialisation?.Outcomes?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                </div>

                <div className="content-right" data-aos={"fade-right"}>
                 
                    <h3 className="sub-title">{Sports_jobs_opp}</h3>
                    <h4 className="sub-title">{JobOpportunitiesS?.small_title}</h4>
                    <p className="offer-details-description">
                      {JobOpportunitiesS?.Description}
                    </p>
                    <ul>
                      {JobOpportunitiesS?.Outcomes?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="offer-details-description">
                      {JobOpportunitiesS?.Description2}
                    </p>
                    <ul>
                      {JobOpportunitiesS?.Outcomes2?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                    <h4 className="sub-title">{JobOpportunitiesS?.small_title2}</h4>
                    <p className="offer-details-description">
                      {JobOpportunitiesS?.Description3}
                    </p>
                    <ul>
                      {JobOpportunitiesS?.Outcomes3?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                    <h4 className="sub-title">{JobOpportunitiesS?.small_title3}</h4>
                    <p className="offer-details-description">
                      {JobOpportunitiesS?.Description4}
                    </p>
                    <ul>
                      {JobOpportunitiesS?.Outcomes4?.map((outcome, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{outcome}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="offer-details-description">
                      {JobOpportunitiesS?.Description5}
                    </p>
                </div>
              </div>
            )}



            {/* Educational Objectives */}
            {program_sub_title_1  && (
              <div className="content-pair">
                <div className="content-left" data-aos={"fade-left"}>
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
                  {LearningOutcomes?.subsubtitle && (
                    <p className="offer-details-description">{LearningOutcomes.subsubtitle}</p>
                  )}
                  {LearningOutcomes?.subsubtitle2 && (
                    <p className="offer-details-description">{LearningOutcomes.subsubtitle2}</p>
                  )}
                   <ul>
                    {LearningOutcomes?.Outcomes2?.map((outcome, index) => (
                      <li key={index} id="offer-details-description-list">
                        <p>{outcome}</p>
                      </li>
                    ))}
                  </ul>
                  <h3 className="sub-title">{program_sub_title_3j}</h3>
                  <p className="offer-details-description">
                    {JobOpportunitiesj?.Description}
                  </p>
                  <ul>
                    {JobOpportunitiesj?.JobOutcomes?.map(
                      (requirement, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{requirement}</p>
                        </li>
                      )
                    )}
                  </ul>
                    <p className="offer-details-description">{JobOpportunitiesj?.SecondDescription}</p>
                    <ul>
                    {JobOpportunitiesj?.JobOutcomes2?.map(
                      (requirement, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{requirement}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="content-right" data-aos={"fade-right"}>
                  <h3 className="sub-title">{program_sub_title_1}</h3>
                  <p className="offer-details-description">
                    {EducationalObjectives?.Description}
                  </p>
                  <h3 className="sub-title">{program_sub_title_3}</h3>
                  <p className="offer-details-description">
                    {JobOpportunities?.Description}
                  </p>
                  <ul>
                    {JobOpportunities?.JobOutcomes?.map(
                      (requirement, index) => (
                        <li key={index} id="offer-details-description-list">
                          <p>{requirement}</p>
                        </li>
                      )
                    )}
                  </ul>
                  
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
            <table className="table" data-aos={"zoom-out"}>
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
                <div className="content-left" data-aos={"fade-left"}>
                  <h3 className="sub-title">{program_sub_title_5}</h3>
                  <p className="offer-details-description">
                    {Traineeship?.Description}
                  </p>
                  <h3 className="sub-title">
                    {Traineeship.program_sub_title_6}
                  </h3>
                  <p className="offer-details-description">
                    {Traineeship?.AdmissionRequirements.DescriptionOne}
                  </p>
                  
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
                    {Traineeship?.ApplicationProcess?.DataToCommunicate?.map(
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
                <div className="content-right" data-aos={"fade-right"}>
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
          {/* <div className="offer-details-image-container">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={imgUrl}
                      className="offer-details-image"
                      alt="departimg"
                    ></img>
                </div> */}
        </div>
      </div>
    </>
  );
}

export default OfferDetails;
