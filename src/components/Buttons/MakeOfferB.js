import React, { useState } from 'react'

import Buttons from './Buttons'
import CustomPopup from '../../pages/CustomPopup'

export default function MakeOfferB(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="card round-corner-35 border-dark card-makeoffer">
            {props.addButton ?
                <div className="d-flex justify-content-center align-items-center card-makeoffer">
                    <div className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" fill="#fff" />
                        </svg>
                    </div>
                </div>
                :
                <div className="card-body p-3">
                    <h4 className="card-title text-center">
                        Beton
                    </h4>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="font-weight-bold">Birim Miktarı :</div>
                        <div>sadasdsa</div>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="font-weight-bold">Birim Fiyatı :</div>
                        <div>sadasdsa</div>
                    </div>

                    <div className="d-flex justify-content-end align-items-end">
                        <div>M2</div>
                    </div>

                </div>
            }

            {isOpen && <CustomPopup
                handleClose={togglePopup}
                content={
                    <div className="p-5 bg-light">
                        
                    </div>
                }
            />
            }

        </div>
    )
}
