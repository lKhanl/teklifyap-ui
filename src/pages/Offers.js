import React, { useEffect, useState } from "react";
import offerSVG from "../images/offer.svg";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function Offers() {
    const [offersInfo, setOffersInfo] = useState([]);
    const id = useSelector((state) => state.auth.userID);
    const Theme = useSelector((state) => state.theme.theme);
    let values = {
        user_id: id,
    };

    useEffect(() => {
        fetch(`http://localhost:8080/api/offer/getOffers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => setOffersInfo(data.data));
    }, []);

    const idHandler = (e) => {
        console.log(e);
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-center position-relative">
                    <div className="position-absolute text-white h3 user-select-none pt-md-4 pt-3">
                        TEKLİFLERİM
                    </div>
                </div>

                <img src={offerSVG} alt="offer"></img>

                <div className="container-lg mt-5">
                    <Offer title="Teklif Başlığı" date="Tarih" header="true" />
                    {offersInfo.map((index) =>
                        index.offer_status == true ? (
                            <div key={index.offer_id}>
                                <Offer
                                    clkhndlr={() => idHandler(index.offer_id)}
                                    id={index.offer_id}
                                    title={index.offer_title}
                                    date={index.offer_date.slice(0, 10)}
                                    status={index.offer_status}
                                />
                            </div>
                        ) : (
                            <div key={index.offer_id}>
                                <Offer
                                    clkhndlr={() => idHandler(index.offer_id + " " + index.offer_status)}
                                    id={index.offer_id}
                                    title={index.offer_title}
                                    date={index.offer_date.slice(0, 10)}
                                    status={index.offer_status}
                                />
                            </div>
                        )
                    )}

                </div>
            </div>
            <Footer />
        </>
    );
}
