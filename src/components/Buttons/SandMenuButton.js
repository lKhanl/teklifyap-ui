import React, { useState } from "react";
import { useSelector } from "react-redux";

const SandMenuButton = () => {
  const [click, setClick] = useState(false);
  const Theme = useSelector((state) => state.theme.theme);
  const clickHandler = (e) => {
    e.preventDefault();
    setClick(!click);
  };
  return (
    <div className="container-fluid p-0 m-0">
      <div
        onClick={clickHandler}
        className="lines-wrapper d-flex justify-content-center align-items-center"
      >
        {!click ? (
          <div>
            <div
              className={
                !Theme
                  ? "firstLine firstLine-default-theme"
                  : "firstLine firstLine-dark-theme"
              }
            ></div>
            <div
              className={
                !Theme
                  ? "secondLine secondLine-default-theme mt-2"
                  : "secondLine secondLine-dark-theme mt-2"
              }
            ></div>
            <div
              className={
                !Theme
                  ? "thirdLine secondLine-default-theme mt-2"
                  : "thirdLine secondLine-dark-theme mt-2"
              }
            ></div>
          </div>
        ) : (
          <div className="position-relative d-flex justify-content-center align-items-center">
            <div
              className={
                !Theme
                  ? "position-absolute firstLine-off firstLine-off-default-theme"
                  : "position-absolute firstLine-off firstLine-off-dark-theme"
              }
            ></div>
            <div
              className={
                !Theme
                  ? "secondLine-off secondLine-off-default-theme"
                  : "secondLine-off secondLine-off-dark-theme"
              }
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SandMenuButton;
