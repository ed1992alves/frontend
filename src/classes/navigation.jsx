import classOrder from "./classOrder";
import React from "react";
import { Link } from "react-router-dom";

const navigation = ({ currentPage }) => {
  const previousPage = currentPage > 0 && classOrder[currentPage - 1];
  const followingPage =
    classOrder.length > currentPage && classOrder[currentPage + 1];

  return (
    <>
      <div class="pageHeader">
        <h2>{`${currentPage + 1}. ${classOrder[currentPage].title}`}</h2>
      </div>{" "}
      <div class="navigation">
        {previousPage ? (
          <div class="previous-container">
            <Link to={previousPage.path} class="previous">
              {" "}
              {`<< ${previousPage.title}`}
            </Link>
          </div>
        ) : (
          <div class="empty">
            {" "}
            <a
              target="_blank"
              href="https://github.com/mindera-school/class-of-2020"
            >
              More
            </a>
          </div>
        )}
        <div class="previous-container">
          <Link to="/" class="previous">
            {" "}
            {"Menu"}
          </Link>
        </div>
        {followingPage ? (
          <div class="previous-container">
            <Link to={followingPage.path} class="previous">
              {" "}
              {`${followingPage.title} >>`}
            </Link>
          </div>
        ) : (
          <div class="empty">
            <a
              target="_blank"
              href="https://github.com/mindera-school/class-of-2020"
            >
              Keep Waiting...
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default navigation;
