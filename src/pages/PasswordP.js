import React, { Component } from "react";
import ReactCodeInput from "react-verification-code-input";
import background from "../images/bg.jpg";
import Buttons from "../components/Buttons/Buttons";
import Input from "../components/Inputs/Input";

const PasswordP = () => {

  return (
    <div className="container-fluid position-relative overflow-hidden vh-100 p-0">
    <img className="background-img  " src={background} alt='background-img'></img>
    <div className="img-cover-color"></div>
    
    <div className="d-flex justify-content-center  ">
      <div className="col-md-4 mt-4 d-flex flex-column align-items-center align-items-center justify-content-center round">
        <div className="d-inline text-center mt-4 or-text user-select-none fs-6 w-75">
          Email hesabına gönderilecek kodu aşağıdaki kutucuklara girerek
          yeni bir şifre belirleyebilirsin.
        </div>
        <form>
          <div className="mt-3">
          <Input title="Email"></Input>
          </div>
          <div className="mt-3">
            <Buttons title='Kodu Gönder'></Buttons>
          </div>
        </form>
        <form>
          <div className="d-flex justify-content-center mt-5">
            <ReactCodeInput
              fields={5}
              required
              className="user-select-none "
            />
          </div>
          <div className="mt-5 pb-4">
            <Buttons title ='Onayla'></Buttons>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default PasswordP 