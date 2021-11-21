import React from "react";
import team from "../images/team.svg";
import teamdescp from "../images/teamdescp.svg";
import role from "../images/roles.png";
export const Team = () => {
  return (
    <div className="container-fluid p-0 m-0 position-relative">
      <img className="team" src={team} alt='team'></img>
      <div className="position-relative team-descp flex-wrap">
        <img className="team-descp-img" src={teamdescp} alt='team-descp-img'></img>
        <div className="container d-flex justify-content-center">
          <div className="row position-relative p-0 m-0 names justify-content-around  ">


            <div className="col-md-2 d-flex flex-column align-items-center firstPerson">
            <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-top d-flex flex-column align-items-center">
              <div className="circle1"></div>

              <div className="text-center mt-5 ">
                <b>
                  İSHAK<br></br>ÇOBAN
                </b>
              </div>

              <hr className="nameSurname-line"></hr>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="role-descp position-absolute">FULL S</div>
                <img className="roles" src={role} alt='role'></img>
              </div>
            </div>
          </section>
            </div>

            <div className="col-md-2 d-flex flex-column align-items-center secondPerson">
            <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-top d-flex flex-column align-items-center">
              <div className="circle1"></div>

              <div className="text-center mt-5 ">
                <b>
                  OĞUZHAN<br></br>ERÇELİK
                </b>
              </div>

              <hr className="nameSurname-line"></hr>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="role-descp position-absolute">FULL S</div>
                <img className="roles" src={role} alt='role'></img>
              </div>
            </div>
          </section>
            </div>

            <div className="col-md-2 d-flex flex-column align-items-center sixthPerson">
            <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-top d-flex flex-column align-items-center">
              <div className="circle1"></div>

              <div className="text-center mt-5 ">
                <b>
                  SEVDA<br></br>ERGÜN
                </b>
              </div>

              <hr className="nameSurname-line"></hr>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="role-descp position-absolute">CACIKİ</div>
                <img className="roles" src={role} alt='role'></img>
              </div>
            </div>
          </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
