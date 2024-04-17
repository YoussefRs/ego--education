import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SubHeader.css";
import { Fragment } from "react";

const SubHeader = ({ title, path, current }) => {
  return (
    <header className="page-heading clearfix p-2 d-flex align-items-center justify-content-center flex-column">
      <h1 className="heading-title float-left mb-0">{title}</h1>
      <div className="breadcrumbs float-right">
        <ul className="breadcrumbs-list d-flex align-items-center gap-3">
          {path.map((pth, index) => (
            <Fragment key={index}>
              <li>
                <Link to={pth.url}>{pth.label}</Link>
              </li>
              {index < path.length - 1 && (
                <FontAwesomeIcon icon={faAngleRight} />
              )}
            </Fragment>
          ))}
          <li className="current"> <FontAwesomeIcon icon={faAngleRight} /> {current}</li>
        </ul>
      </div>
    </header>
  );
};

export default SubHeader;
