import React, { Component } from "react";
import popupCross from "../../images/popupCross.svg";
export default function PopupCross(props) {
    
    return (
        <div id='popupCross' className="m-0 user-select-none">
            <img width={props.width} className="popupCross" src={popupCross} alt='X' onClick={props.onClick}></img>
        </div>
    );

}
