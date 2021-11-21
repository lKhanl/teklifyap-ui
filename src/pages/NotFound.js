import React from "react";
import { useHistory } from "react-router";
import Buttons from "../components/Buttons/Buttons";
import notFound from "../images/NotFoundLogo.svg";
export const NotFound = () => {

  const history = useHistory();
  const homeHandler = (e) => {
    e.preventDefault();
    history.replace("/");
  };
  return (
    <div className="container-fluid p-0 m-0 user-select-none">
      <div className="d-flex justify-content-center">
        <img className="not-found-logo" src={notFound} alt="NFLogo"></img>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <div className="text-center notfound-page-text">Page</div>
        <div className="text-center notfound-not-text ms-3">not</div>
        <div className="text-center notfound-found-text ms-3">found</div>
      </div>
      <div className="mt-3">
        <Buttons clicked={homeHandler} title="Anasayfaya Git"></Buttons>
      </div>
    </div>
  );
};
