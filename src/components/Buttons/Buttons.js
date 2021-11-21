import React from "react";
import buttons from "./AllButtons";
import fb from "../../images/facebook.svg";
import g from "../../images/google.svg";
const Buttons = (props) => {
    let id = "";
    let className = "";
    let type = ""
    buttons.map((obj) => {
        if (obj.placeholder == props.title) {
            id = obj.id;
            className = obj.className;
            type = obj.type;
        }
    });
    return (

        <button disabled={props.disabled} id={id} className={props.className ? props.className : className} /*type={type}*/ onClick={props.clicked}  >
            {props.title == "Facebook İle Giriş Yap" ||
                props.title == "Google İle Giriş Yap" ||
                props.title == "Facebook İle Kayıt Ol" ||
                props.title == "Google İle Kayıt Ol"

                ? null
                : props.title}

            {props.title == "Facebook İle Giriş Yap" ||
                props.title == "Facebook İle Kayıt Ol" ? (
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img
                            className="facebook-image"
                            src={fb}
                            alt="facebook-image"
                        ></img>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="facebook-title">{props.title}</div>
                    </div>
                    <div className="col-1 "></div>
                </div>
            ) : null}
            {props.title == "Google İle Giriş Yap" ||
                props.title == "Google İle Kayıt Ol" ? (
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img className="google-image" src={g} alt="google-image"></img>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="google-title">{props.title}</div>
                    </div>
                    <div className="col-1"></div>
                </div>
            ) : null}
            {props.children}
        </button>

    );
};

export default Buttons;
