import React from "react";
import darktheme from "../../images/darktheme.svg";
import defaulttheme from "../../images/defaulttheme.svg";
import {ThemeActions} from "../../store/slices/Theme"
import { useSelector, useDispatch } from "react-redux";
export const THEME = () => {
  const Theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  const defaultThemeHandler = (e) => {
    e.preventDefault();
    dispatch(ThemeActions.changeTheme());
  };
  return (
    <div className="container-fluid p-0 m-0 user-select-none d-flex justify-content-center">
      <div
        onClick={defaultThemeHandler}
        className="theme-wrapper position-relative d-flex align-items-center"
      >
        <div
          className={
            !Theme
              ? "default-off position-absolute w-100"
              : "default-on position-absolute w-100"
          }
        >
          <img
            id="defaultTheme"
            className="defaulttheme-logo"
            src={defaulttheme}
            alt="darktheme-logo"
          ></img>
        </div>

        {
          <div
            className={
              Theme
                ? "dark-off position-absolute w-100"
                : "dark-on position-absolute w-100"
            }
          >
            <img
              id="darkTheme"
              className="darktheme-logo"
              src={darktheme}
              alt="darktheme-logo"
            ></img>
          </div>
        }
      </div>
    </div>
  );
};
