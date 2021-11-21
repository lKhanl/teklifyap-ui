import React from "react";
import { NavLink } from "react-router-dom";
import prof from "../../images/profileLogin.svg";
export const LandingPLogin = () => {
  return (
    <div className="container-fluid m-0 p-0">
    <NavLink to='/Login'>
      <button className="btn-name d-flex align-items-center position-relative p-0 m-0 ">
        <div className="prof-wrapper-login"></div>
        <div className="position-absolute w-100 d-flex justify-content-around align-items-center">
          <img className='prof-img img-fluid user-select-none'
           src={prof} alt='prof-img'></img>
          <div className='user-select-none'>GİRİŞ YAP</div>
        </div>
      </button></NavLink>
    </div>
  );
};
