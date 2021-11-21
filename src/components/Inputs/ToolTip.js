import React, { useEffect, useState } from "react";
import MouseTooltip from "react-sticky-mouse-tooltip";
import warning from "../../images/warningWhite.svg";
const ToolTip = (props) => {
  let array = [];
  array.push(props.title);
  return (
    <div className="tooltip-wrapper container-fluid p-0 m-0">
      <MouseTooltip visible={true} offsetX={15} offsetY={-70}>
        <div className="tooltip-wrapper-description d-flex justify-content-start align-item-center">
          <div className="warning-section align-self-stretch d-flex align-items-center justofy-conter-center">
            <img className="warning-white" src={warning} alt="warning"></img>
          </div>
          <div className="tooltip-wrapper-text ms-4 me-4 mt-1 mb-1">
            {props.title1} <br/>
            {props.title2}<br/>
            {props.title3}<br/>
            {props.title4}
          </div>
        </div>
      </MouseTooltip>
    </div>
  );
};
export default ToolTip;
