import classOrder from "../classes/classOrder";
import React from "react";
import { Link } from "react-router-dom";
import minder from "../styles/images/minder.svg";

const navigation = ({ currentPage }) => {
  const previousPage = currentPage > 0 && classOrder[currentPage - 1];
  const followingPage =
    classOrder.length > currentPage &&
    classOrder[currentPage + 1].status &&
    classOrder[currentPage + 1];

  return (
    <>
      <div className="pageHeader">
        <h1>{`${currentPage + 1}. ${classOrder[currentPage].title}`}</h1>
      </div>{" "}
      <div className="navigation">
        {previousPage ? (
          <div className="previous-container">
            <Link to={previousPage.path} className="previous">
              {" "}
              {`<< ${previousPage.title}`}
            </Link>
          </div>
        ) : (
          <div className="empty">
            {" "}
            <a
              target="_blank"
              href="https://github.com/mindera-school/class-of-2020"
            >
              More
            </a>
          </div>
        )}
        <div className="previous-container">
          <Link to="/" className="previous">
            {" "}
            {"Menu"}
          </Link>
        </div>
        {followingPage ? (
          <div className="previous-container">
            <Link to={followingPage.path} className="previous">
              {" "}
              {`${followingPage.title} >>`}
            </Link>
          </div>
        ) : (
          <div className="empty">
            <a
              target="_blank"
              href="https://github.com/mindera-school/class-of-2020"
            >
              Keep Waiting...
            </a>
          </div>
        )}
      </div>
      <a href="#" id="mindera-icon">
        {" "}
        <img src={minder} />
      </a>
    </>
  );
};

export default navigation;
