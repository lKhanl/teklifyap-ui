import React, { Component } from "react";

import footer from "../images/footer.svg";
import logo from "../images/logo.svg";
import googlePlay from "../images/googlePlay.png";
import icon from "../images/instagram.png";
export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0 position-relative">
        <img className="footer-bg" src={footer} alt='footer-bg'></img>

        <div className="square position-relative "></div>

        <div className="row position-relative p-0 m-0">
          <div className="col-2"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img className="logo" src={logo} alt='logo'></img>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center gplay">
            <img className="gPlay w-75" src={googlePlay} alt='gPlay'></img>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="footer-bottom">
          <div className="position-relative d-flex justify-content-center descp-wrapper">
            <div className="w-75 footer-descp ">
            &emsp;&emsp;Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="position-relative text-center find-us mt-4 ">
            FIND US
          </div>
          <div className="position-relative d-flex justify-content-center mt-2">
            <div className="w-25 d-flex justify-content-around">
              <img className="icon" src={icon} alt='icon'></img>
              <img className="icon" src={icon} alt='icon'></img>
              <img className="icon" src={icon} alt='icon'></img>
              <img className="icon" src={icon} alt='icon'></img>
              <img className="icon" src={icon} alt='icon'></img>
            </div>
          </div>
          <div className="position-relative text-center copyright2021 mt-2">
            COPYRIGHT 2021
          </div>
        </div>
      </div>
    );
  }
}
