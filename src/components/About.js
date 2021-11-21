import React from "react";
import aboutus from "../images/aboutus.svg";
import logo from "../images/logo.svg";
import circles from "../images/circles.svg";

export const About = () => {
  return (
    <div className="container-fluid p-0 m-0 position-relative mt-5">
      <img className="aboutus-img" src={aboutus} alt='aboutus-img'></img>
      <div className="square2 position-relative "></div>

      <section className="scroll-container">
        <div className="js-scroll fade-in-bottom">
          <div className="row about-top position-relative d-flex justify-content-center align-items-center p-0 m-0 js-scroll">
            <div className="col-1"></div>
            
            <div className="col-1 d-flex justify-content-center align-items-center ">
              <img className="w-100" src={circles} alt='circles'></img>
            </div>
            
            <div className="col-1"></div>
          </div>
        </div>
      </section>

      <div className="row position-relative p-0 m-0 about-img">
        <div className="col-1"></div>

        <div className="col-md-5 d-flex justify-content-center align-items-center ">
          <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-left">
              <div className="position-relative d-flex justify-content-center align-items-center about-descp">
                &emsp;&emsp;Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-5">
          <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-right">
              <div className="d-flex justify-content-center align-items-center">
                <img className="logo" src={logo} alt='logo'></img>
              </div>
            </div>
          </section>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};
