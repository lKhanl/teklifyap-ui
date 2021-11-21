import React, { useState } from "react";
import { useSelector } from "react-redux";

import Buttons from "../components/Buttons/Buttons";
import CustomPopup from "../pages/CustomPopup";

export default function Offer(props) {
    const [isSmall, setIsSmall] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [isHeader, setIsHeader] = useState(props.header);
    const Theme = useSelector((state) => state.theme.theme);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const positiveHandler = (e) => {
        let status = "true"
        fetch(`http://localhost:8080/api/offer/updateStatus/${props.id}/${status}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());

        setStatus("true");
        togglePopup();
    };

    const negatiffHandler = (e) => {
        let status = "false"
        fetch(`http://localhost:8080/api/offer/updateStatus/${props.id}/${status}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());

        setStatus("false");
        togglePopup();
    };

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 675) {
                setIsSmall(false);
            } else {
                setIsSmall(true);
            }
        }

        window.addEventListener("resize", handleResize);
    }, [isSmall]);

    return (
        <>
            {isHeader ? (
                <div className="d-flex flex-row bg-secondary p-3 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3">
                    <div className="d-flex align-items-center col-7 text-white">
                        {props.title}
                    </div>
                    <div
                        className={
                            !isSmall
                                ? "d-flex align-items-center col-2 ms-3 text-white"
                                : "d-none"
                        }
                    >
                        {props.date}
                    </div>
                </div>
            ) : !isSmall ? (
                <div
                    className={
                        status === "true"
                            ? "d-flex flex-row bg-opacity-75 bg-success text-white p-3 ps-sm-5 px-sm-4 rounded-pill mb-3"
                            : !Theme ? "d-flex flex-row bg-opacity-75 bg-danger text-white p-3 ps-sm-5 px-sm-4 rounded-pill mb-3" : "d-flex flex-row bg-opacity-50 bg-danger text-white p-3 ps-sm-5 px-sm-4 rounded-pill mb-3"
                    }
                >
                    <div className="d-flex align-items-center col-7">{props.title}</div>
                    <div className="d-flex align-items-center col-2 ms-3">
                        {props.date}
                    </div>
                    <div className={"d-flex justify-content-evenly col-3"}>
                        <Buttons onClick={props.clkhndlr} title="İncele" />
                        <Buttons title="Ayarla" clicked={togglePopup} />
                    </div>
                </div>
            ) : (
                <div
                    className={
                        status === "true"
                            ? "d-flex flex-row bg-opacity-75 text-white bg-success p-4 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3"
                            : !Theme ? "d-flex flex-row bg-opacity-75 bg-danger text-white p-3 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3" : "d-flex flex-row bg-opacity-50 bg-danger text-white p-3 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3"
                    }
                >
                    <div className="d-flex align-items-center col-7">{props.title}</div>
                    <div className={"d-flex flex-row d-flex justify-content-evenly col-5 ms-sm-3"}>
                        <Buttons onClick={props.clkhndlr} title="İncele" />
                        <Buttons title="Ayarla" />
                    </div>
                </div>
            )}
            {isOpen && (
                <CustomPopup
                    handleClose={togglePopup}
                    content={
                        <div className="d-flex justify-content-center flex-column p-4">
                            <div className="text-center product-text mt-4">{props.title}</div>

                            <div className="text-center">{props.date}</div>

                            <div className="d-flex justify-content-center text-product mt-3">
                                <form>
                                    <div className="d-flex flex-column justify-content-center">
                                        <button
                                            className="btn btn-success"
                                            onClick={positiveHandler}
                                        >
                                            Teklifi olumlu yap
                                        </button>
                                        <div className="mt-2" />
                                        <button
                                            className="btn btn-success"
                                            onClick={negatiffHandler}
                                        >
                                            Teklifi olumsuz yap
                                        </button>
                                        <div className="mt-2" />
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => alert("silindi")}
                                        >
                                            Sil
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                />
            )}
        </>
    );
}
