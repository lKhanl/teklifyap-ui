import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { LandingPLogin } from "../Buttons/LandingPLogin";
import { LandingPOffer } from "../Buttons/LandingPOffer";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../../store/slices/Auth";
import menu from "../../images/sandwichMenu/sandwich.svg";
import menuCROSS from "../../images/sandwichMenu/sandwichCross.svg";
import { NavbarAnimation } from "../Animations/NavbarAnimation";
import loginSYMBOL from "../../images/LOGsymbol.svg";
import RegisterSYMBOL from "../../images/REGsymbol.svg";
import { GetPath } from "../Animations/ScrollToTop";
import Wave from "react-wavify";
import { THEME } from "../Buttons/Theme";
import SandMenuButton from "../Buttons/SandMenuButton";
const Navbar = () => {
  const [click, setClick] = useState(true);
  const Auth = useSelector((state) => state.auth.authentication);
  const Theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    NavbarAnimation();
  });

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
  };
  const menuHandler = () => {
    setClick(!click);
  };
  return (
    <div className="container-fluid p-0 m-0 user-select-none sdsd">
      <div
        className={
          !Theme
            ? "navbar-wrapper navbar-wrapper-default-theme d-flex flex-column justify-content-center position-relative "
            : "navbar-wrapper navbar-wrapper-dark-theme d-flex flex-column justify-content-center position-relative "
        }
      >
        <div className="position-absolute d-flex justify-content-center align-items-center">
          <img className="navbar-logo " src={logo} alt="navbar-logo"></img>
          <div className="navbar-logo-name-display">
            <div
              className={
                !Theme
                  ? "navbar-logo-name navbar-logo-name-default-theme d-flex align-items-center mt-2"
                  : "navbar-logo-name navbar-logo-name-dark-theme d-flex align-items-center mt-2"
              }
            >
              LOREM IPSUM
            </div>
          </div>
        </div>
        {!Auth && (GetPath() == "/Login" || GetPath() == "/Register") ? (
          <div style={{ zIndex: "2" }}>
            <THEME></THEME>
          </div>
        ) : null}

        <div className="col-12 position-absolute d-flex justify-content-end align-items-center ">
          {Auth || (!Auth && GetPath() == "/") ? (
            <div className="w-50 d-flex flex-column justify-content-center">
              {/*****************************Animations*************************************/}
              <div className="row text-center p-0 m-0">
                <div className="col-3">
                  <div className="d-flex justify-content-around text-center">
                    <div
                      style={{ opacity: "0", width: "15px", height: "17px" }}
                    ></div>
                    <div className="w-25">
                      <div id="nav-circles">
                        {GetPath() != "/" ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="leftCircle"></div>
                            <div className="middleCircle"></div>
                            <div className="rightCircle"></div>
                          </div>
                        ) : null}
                      </div>
                      {GetPath() == "/" ? (
                        <div className="circles-wrapper">
                        <div className=" d-flex justify-content-center align-items-center ">
                          <div className="leftCircle-no-animation"></div>
                          <div className="middleCircle-no-animation"></div>
                          <div className="rightCircle-no-animation"></div>
                        </div>
                      </div>
                      ) : null}
                    </div>
                    <div
                      style={{ opacity: "0", width: "15px", height: "17px" }}
                    ></div>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                      <div className="w-25">
                        <div id="nav-circles2">
                          {GetPath() != "/Inventory" ? (
                            <div className="position-absolute circles d-flex justify-content-center align-items-center">
                              <div className="leftCircle"></div>
                              <div className="middleCircle"></div>
                              <div className="rightCircle"></div>
                            </div>
                          ) : null}
                        </div>
                        {GetPath() == "/Inventory" ? (
                          <div className="circles-wrapper">
                            <div className=" d-flex justify-content-center align-items-center ">
                              <div className="leftCircle-no-animation"></div>
                              <div className="middleCircle-no-animation"></div>
                              <div className="rightCircle-no-animation"></div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                  <div className="w-25">
                    <div id="nav-circles3">
                      {GetPath() != "/Offers" ? (
                        <div className="circles d-flex justify-content-center align-items-center">
                          <div className="leftCircle"></div>
                          <div className="middleCircle"></div>
                          <div className="rightCircle"></div>
                        </div>
                      ) : null}
                    </div>
                    {GetPath() == "/Offers" ? (
                      <div className="circles-wrapper">
                      <div className=" d-flex justify-content-center align-items-center ">
                        <div className="leftCircle-no-animation"></div>
                        <div className="middleCircle-no-animation"></div>
                        <div className="rightCircle-no-animation"></div>
                      </div>
                    </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                  <div className="w-25">
                    <div id="nav-circles4">
                      <div className="circles d-flex justify-content-center align-items-center">
                        <div className="leftCircle"></div>
                        <div className="middleCircle"></div>
                        <div className="rightCircle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*****************************Links*************************************/}
              <div className="navbar-links ">
                <div className="d-flex justify-content-around p-0 text-center">
                  <li className=" w-25">
                    <NavLink
                      activeStyle={
                        GetPath() == "/"
                          ? {
                              color: "#FFB400",
                            }
                          : null
                      }
                      id="L1"
                      to="/"
                      activeClassName="active"
                      className={
                        !Theme
                          ? "links links-default-theme p-2"
                          : "links links-dark-theme p-2"
                      }
                    >
                      ANASAYFA
                    </NavLink>
                  </li>
                  <li className=" w-25">
                    <NavLink
                      activeStyle={{
                        color: "#FFB400",
                      }}
                      id="L2"
                      to="/Inventory"
                      activeClassName="active"
                      className={
                        !Theme
                          ? "links links-default-theme p-2"
                          : "links links-dark-theme p-2"
                      }
                    >
                      ENVANTER
                    </NavLink>
                  </li>
                  <li className="w-25">
                    <NavLink
                      activeStyle={{
                        color: "#FFB400",
                      }}
                      id="L3"
                      to="/Offers"
                      activeClassName="active"
                      className={
                        !Theme
                          ? "links links-default-theme p-2"
                          : "links links-dark-theme p-2"
                      }
                    >
                      TEKLİFLERİM
                    </NavLink>
                  </li>
                  <li className="w-25 position-relative profile-section dropdown">
                    <div
                      id="L4"
                      className={
                        !Theme
                          ? "profile-dropdown profile-dropdown-default-theme"
                          : "profile-dropdown profile-dropdown-dark-theme"
                      }
                    >
                      PROFİL
                    </div>
                    <div
                      className={
                        !Theme
                          ? "dropdown-content dropdown-content-default-theme"
                          : "dropdown-content dropdown-content-dark-theme"
                      }
                    >
                      <NavLink
                        activeStyle={{
                          color: "#FFB400",
                        }}
                        id="L6"
                        to="/Profile"
                        activeClassName="active"
                        className="links drop1 d-flex justify-content-evenly align-items-center"
                      >
                        BİLGİLERİM
                      </NavLink>
                      <div>
                      
                        <THEME></THEME>
                      </div>
                      {Auth && (
                        <NavLink
                          onClick={logoutHandler}
                          id="L7"
                          to="/Login"
                          activeClassName="active"
                          className="links drop2 d-flex justify-content-evenly align-items-center"
                        >
                          ÇIKIŞ YAP
                        </NavLink>
                      )}
                    </div>
                  </li>
                </div>
              </div>
            </div>
          ) : null}
          {!Auth && GetPath() != "/Login" && GetPath() != "/Register" ? (
            <div className="offerButton">
              <div className="d-flex justify-content-center align-items-center pe-4 ">
                <LandingPLogin></LandingPLogin>
              </div>
            </div>
          ) : null}

          {Auth && (
            <div className="offerButton">
              <div className="d-flex justify-content-center align-items-center pe-4 ">
                <LandingPOffer></LandingPOffer>
              </div>
            </div>
          )}

          {!Auth && GetPath() == "/Login" ? (
            <div className="col-5 loginregsymbol-toggle">
              <div className="d-flex justify-content-end align-items-center">
                <img
                  className="log-reg-symbol-img"
                  src={loginSYMBOL}
                  alt="loginSYMBOL"
                ></img>
                <div
                  className={
                    !Theme
                      ? "align-self-end log-reg-symbol-text log-reg-symbol-text-default-theme"
                      : "align-self-end log-reg-symbol-text log-reg-symbol-text-dark-theme"
                  }
                >
                  GİRİŞ FORMU
                </div>
                <img
                  className="log-reg-symbol-img"
                  src={loginSYMBOL}
                  alt="loginSYMBOL"
                ></img>
              </div>
            </div>
          ) : null}

          {!Auth && GetPath() == "/Register" ? (
            <div className="col-5 loginregsymbol-toggle">
              <div className="d-flex justify-content-end align-items-center">
                <img
                  className="log-reg-symbol-img"
                  src={RegisterSYMBOL}
                  alt="registerSYMBOL"
                ></img>
                <div
                  className={
                    !Theme
                      ? "align-self-end log-reg-symbol-text log-reg-symbol-text-default-theme"
                      : "align-self-end log-reg-symbol-text log-reg-symbol-text-dark-theme"
                  }
                >
                  KAYIT FORMU
                </div>
                <img
                  className="log-reg-symbol-img"
                  src={RegisterSYMBOL}
                  alt="registerSYMBOL"
                ></img>
              </div>
            </div>
          ) : null}
          {Auth || (!Auth && GetPath() == "/") ? (
            <div className="d-flex justify-content-center align-items-center">
              <div onClick={menuHandler} className="menu-sandwich">
                <SandMenuButton></SandMenuButton>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {Auth || (!Auth && GetPath() == "/") ? (
        <div
          id="dropdown"
          onClick={menuHandler}
          className={
            !click
              ? !Theme
                ? "position-absolute navbar-dd-links navbar-dd-links-default-theme"
                : "position-absolute navbar-dd-links navbar-dd-links-dark-theme"
              : "d-none false"
          }
        >
          <div className=" navbar-dd-links justify-content-center p-0 text-center">
            {Auth && (
              <li className=" d-flex justify-content-evenly">
                <NavLink
                  // id="L1"
                  /* activeStyle={
                  GetPath() == "/" && {
                    color: "#FFB400",
                  }
                }*/
                  to="/"
                  activeClassName="active"
                  className={
                    !Theme
                      ? "links p-2 each-link each-link-default-theme d-flex flex-row justify-content-evenly sandwichMenuOfferButton"
                      : "links p-2 each-link each-link-dark-theme d-flex flex-row justify-content-evenly sandwichMenuOfferButton"
                  }
                >
                  TEKLİF YAP
                </NavLink>

                <div className="position-absolute w-100 wave-wrapper">
                  <Wave
                    fill="url('#gradient')"
                    paused={false}
                    options={{
                      height: 100,
                      amplitude: 20,
                      speed: 0.3,
                      points: 2,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        gradientTransform="rotate(90)"
                      >
                        <stop offset="10%" stopColor="#22E435" />
                        <stop offset="90%" stopColor="#2A844F" />
                      </linearGradient>
                    </defs>
                  </Wave>
                </div>
              </li>
            )}
            {!Auth && GetPath() == "/" ? (
              <li className=" d-flex justify-content-evenly">
                <NavLink
                  // id="L1"
                  /* activeStyle={
                  GetPath() == "/" && {
                    color: "#FFB400",
                  }
                }*/
                  to="/Login"
                  activeClassName="active"
                  className={
                    !Theme
                      ? "links p-2 each-link each-link-default-theme d-flex flex-row justify-content-evenly sandwichMenuOfferButton"
                      : "links p-2 each-link each-link-dark-theme d-flex flex-row justify-content-evenly sandwichMenuOfferButton"
                  }
                >
                  GİRİŞ YAP
                </NavLink>

                <div className="position-absolute w-100 wave-wrapper">
                  <Wave
                    fill="url('#gradient1')"
                    paused={false}
                    options={{
                      height: 100,
                      amplitude: 20,
                      speed: 0.3,
                      points: 2,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="gradient1"
                        gradientTransform="rotate(90)"
                      >
                        <stop offset="10%" stopColor="#F3AC00" />
                        <stop offset="90%" stopColor="#B1A035" />
                      </linearGradient>
                    </defs>
                  </Wave>
                </div>
              </li>
            ) : null}
            <li className="each-link-out d-flex justify-content-evenly">
              <NavLink
                // id="L1"
                activeStyle={
                  GetPath() == "/"
                    ? {
                        color: "#FFB400",
                      }
                    : null
                }
                to="/"
                activeClassName="active"
                className={
                  !Theme
                    ? "links p-2 each-link each-link-default-theme d-flex flex-row justify-content-evenly"
                    : "links p-2 each-link each-link-dark-theme d-flex flex-row justify-content-evenly"
                }
              >
                ANASAYFA
              </NavLink>
            </li>
            <li className="each-link-out d-flex justify-content-center">
              <NavLink
                //  id="L2"
                activeStyle={{
                  color: "#FFB400",
                }}
                to="/Inventory"
                activeClassName="active"
                className={
                  !Theme
                    ? "links p-2 each-link each-link-default-theme d-flex flex-row justify-content-evenly"
                    : "links p-2 each-link each-link-dark-theme d-flex flex-row justify-content-evenly"
                }
              >
                ENVANTER
              </NavLink>
            </li>
            <li className="each-link-out d-flex justify-content-center ">
              <NavLink
                //  id="L3"
                activeStyle={{
                  color: "#FFB400",
                }}
                to="/Offers"
                activeClassName="active"
                className={
                  !Theme
                    ? "links p-2 each-link each-link-default-theme d-flex flex-row justify-content-evenly"
                    : "links p-2 each-link each-link-dark-theme d-flex flex-row justify-content-evenly"
                }
              >
                TEKLİFLERİM
              </NavLink>
            </li>
            <li className="each-link-out d-flex justify-content-center ">
              <NavLink
                //  id="L3"
                activeStyle={{
                  color: "#FFB400",
                }}
                to="/Profile"
                activeClassName="active"
                className={
                  !Theme
                    ? "links p-2 each-link each-link-default-theme d-flex flex-row justify-content-evenly"
                    : "links p-2 each-link each-link-dark-theme d-flex flex-row justify-content-evenly"
                }
              >
                BİLGİLERİM
              </NavLink>
            </li>

            {!(!Auth && GetPath() == "/") ? (
              <li className="each-link-out d-flex justify-content-center ">
                <NavLink
                  onClick={logoutHandler}
                  //  id="L3"
                  to="/Login"
                  activeClassName="active"
                  className={
                    !Theme
                      ? "links p-2 each-link each-link-default-theme d-flex flex-row justify-content-evenly"
                      : "links p-2 each-link each-link-dark-theme d-flex flex-row justify-content-evenly"
                  }
                >
                  ÇIKIŞ YAP
                </NavLink>
              </li>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Navbar;
