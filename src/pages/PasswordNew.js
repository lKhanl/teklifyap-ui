import React, { Component } from "react";
import background from "../images/bg.jpg";
import Buttons from "../components/Buttons/Buttons";
import Input from "../components/Inputs/Input";
const PasswordNew = ()=>{

    return (
      <div className="container-fluid position-relative overflow-hidden vh-100 p-0">
        <img className="background-img" src={background}></img>
        <div className="img-cover-color"></div>
        
        <div className="d-flex justify-content-center  ">
          <div className="col-md-4 mt-4 d-flex flex-column align-items-center align-items-center justify-content-center round">
            <div className="d-inline text-center mt-4 or-text user-select-none fs-6 w-75">
              Şifreni Belirle
            </div>
            <form>
              <div className="mt-3">
              <Input title="Email"></Input>
              </div>
              <div className="mt-3">
              <Input title="Şifre"></Input>
              </div>
              <div className="mt-3">
              <Input title="Şifrenizi tekrar giriniz"></Input>
              </div>
              <div className="mt-3 pb-5">
                <Buttons title='Onayla'></Buttons>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  
}

export default PasswordNew;