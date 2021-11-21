import React from "react";
import { NavLink } from "react-router-dom";
import offer from "../../images/teklif.png";
export const LandingPOffer = (props) => {
    return (
        <div className="m-0 p-0">
            <NavLink to='/MakeOffer'>
                <button className="btn-name-offer d-flex align-items-center position-relative p-0 m-0 " >
                    <div className="prof-wrapper"></div>
                    <div className="position-absolute w-100 d-flex justify-content-around align-items-center">
                        <img className='prof-img img-fluid user-select-none'
                            src={offer} alt='prof-imgg'></img>
                        <div className='user-select-none'>TEKLİF YAP</div>
                    </div>
                </button>
            </NavLink>
        </div>
    );
};
