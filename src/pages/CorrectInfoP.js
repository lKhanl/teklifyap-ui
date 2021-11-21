import React, { Component } from "react";
import UploadPhoto from "../components/Buttons/UploadPhoto";
const CorrectInfoP = ()=> {
  
    return (
      <div className="container-fluid p-0 m-0">
      
        <div className="container">
          <div className="d-flex justify-content-between mt-4">
            <div className="profile-circle"></div>
            <div className="align-self-end">
              <UploadPhoto></UploadPhoto>
            </div>
          </div>
          <div>
            <hr className="CorrectInfoP-line"></hr>
          </div>
          <div className='m-3'>
            <div><label
            className="user-select-none profile-info profile-info-label "
            htmlFor="remember"
          >
            Şifre:
          </label>
          <div className="d-inline profile-info bg-dark"> *********</div></div>
            <div><label
            className="user-select-none profile-info profile-info-label "
            htmlFor="remember"
          >
            Şifre:
          </label>
          <div className="d-inline profile-info  "> *********</div></div>
            <div><label
            className="user-select-none profile-info profile-info-label "
            htmlFor="remember"
          >
            Şifre:
          </label>
          <div className="d-inline profile-info  "> *********</div></div>
            <div><label
            className="user-select-none profile-info profile-info-label "
            htmlFor="remember"
          >
            Şifre:
          </label>
          <div className="d-inline profile-info  "> *********</div></div>
            <div><div >
            <UploadPhoto></UploadPhoto>
          </div></div>
          </div>
        </div>
      </div>
    );
  
}
export default CorrectInfoP;