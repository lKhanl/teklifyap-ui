import React from 'react'
import PopupCross from '../components/Buttons/PopupCross'

export default function CustomPopup(props) {
   
    return (
        <div className="popup-box">
            <div className="d-flex justify-content-center">
                <div className="box position-relative">
                    {
                        //<button className="btn btn-danger close-icon user-select-none p-0 rounded-circle" onClick={props.handleClose}>X</button>
                    }
                    <div className="btn m-2 position-absolute cross">
                        <PopupCross width="30px" onClick={props.handleClose} />
                    </div>

                    {props.content}
                </div>
            </div>

        </div>
    )
}
