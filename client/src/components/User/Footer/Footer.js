import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ onLinkClick }) => {
  return (
    <footer className="foot text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              luis Alonso Otero Seminario
            </h5>
            <p className="sub-title">
              I'm a Civil Engineer and Full Stack Developer, with experience in 
              Architecture and Construction industry using and implementing BIM standards 
              through Software. 
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Liens
            </h5>
            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("educationSection")}
                className="sub-title"
                style={{ textDecoration: "none" }}
                to="/"
              >
                {" "}
                Education
              </Link>
            </p>
            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("experienceSection")}
                to="/"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Experience
              </Link>
            </p>

            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("projectSection")}
                to="/"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Projects
              </Link>
            </p>
            <p className="link-hover">
              <Link
                onClick={() => onLinkClick("skillSection")}
                to="/"
                className="sub-title"
                style={{ textDecoration: "none" }}
              >
                Skills
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 sub-title">
            <h5 className="text-uppercase mb-4 font-weight-bold title">
              Contact
            </h5>
            <p>Vancouver BC, Canada</p>
            <p>alonsooteroseminario@gmail.com</p>
            <p>+56 956942823</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              {" "}
              Copyright ©2021 All rights reserved by:
              <span style={{ textDecoration: "none" }}>
                <strong className="title"> Luis Alonso Otero Seminario</strong>
              </span>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  {/* <a
                    href="https://www.facebook.com/ousamabasry"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-facebook-f icons-color"></i>
                  </a> */}
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/luis_alo13"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-twitter icons-color"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/luisalonsooteroseminario/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-linkedin-in icons-color"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/alonsooteroseminario"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-github icons-color"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
