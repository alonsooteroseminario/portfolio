import React from "react";
import profil from "../../../assets/images/profil-laos-peq.png";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Me
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4" src={profil} alt="profil" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
              I'm a Civil Engineer and Full Stack Developer, with experience in 
              Architecture and Construction industry using and implementing BIM standards 
              through Software. <br />
              <br /> Through my last few years, I acquired strong skills in the field of 
              software development building desktop Add-ins or Web-based Apps for Architecture 
              and Construction companies. <br />
              <br /> Motivated, I know how to adapt, I have a sense of
              responsibility and organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
