import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import { useSelector } from "react-redux";
import CustomPopup from "./CustomPopup";

const Profile = () => {
    const [info, setInfo] = useState({});
    const [dataSuccess, setSuccess] = useState(false);
    const [dataError, setError] = useState(false);
    const id = useSelector((state) => state.auth.userID);
    const Theme = useSelector((state) => state.theme.theme);
    let values = {
        user_id: id,
    };
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function dateConverter() {
        const date = new Date(info.user_creation_date)
        const year = date.getFullYear()
        const month = date.toLocaleString('default', { month: 'long' });

        console.log(year + " " + month);
        return {
            year: year,
            month: month
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        let date = new Date(document.getElementById("date").value)
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset * 60 * 1000))

        let newUser = {
            id: id,
            name: document.getElementById("name").value,
            surname: document.getElementById("surname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value,
            creationDate: date.toISOString().split('T')[0]
        }

        fetch("http://localhost:8080/api/user/updateInformation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.success) {
                    setSuccess(true)
                    setError(false)
                } else {
                    setSuccess(false)
                    setError(true)
                }
                setInfo(data.data)
            });

        togglePopup()
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/user/userProfile", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => setInfo(data.data));


    }, [])


    return (
        <div className="container position-relative ">

            <div className={dataSuccess ? "text-center" : "d-none text-center"}>
                <span className="text-success">Bilgileriniz başarıyla güncellendi!</span>
            </div>

            <div className={dataError ? "text-center" : "d-none text-center"}>
                <span className="text-danger">İşlem sırasında bir hata meydana geldi, lütfen dah sonra tekrar deneyiniz!</span>
            </div>

            <div className="d-flex justify-content-center ">
                <div className={!Theme ? "profile-wrapper mt-3 mb-4 p-5 pt-4 bg-secondary text-white round-corner" : "profile-wrapper mt-3 mb-4 p-5 pt-4 bg-light text-dark round-corner"}>
                    <div className="user-select-none text-center mt-3 h2">{info.user_name + ' ' + info.user_surname}</div>

                    <div className="d-flex justify-content-center mt-3">
                        <div className="profile-circle"></div>
                    </div>

                    <div className="d-flex flex-row mt-3 mb-3">
                        <div className="d-flex justify-content-center flex-column col-3 ms-5">
                            <label
                                className="profile-info profile-info-label"
                                htmlFor="remember"
                            >
                                Email:
                            </label>

                            <label
                                className="profile-info profile-info-label"
                                htmlFor="remember"
                            >
                                Şifre:
                            </label>
                        </div>

                        <div className="d-flex flex-column col-8">
                            <div className="d-inline profile-info"> {info.user_email}</div>
                            <div className="d-inline profile-info">*********</div>
                        </div>
                    </div>

                    <div className="d-inline profile-info ">Kullanıcı <b>{dateConverter().year}</b>  yılının <b>{dateConverter().month.toLowerCase()}</b> ayında kaydoldu.</div>

                    <div className="d-flex justify-content-end p-0 mt-5">
                        <Buttons clicked={togglePopup} title="Bilgilerimi Düzenle"></Buttons>

                    </div>
                </div>


                {isOpen && <CustomPopup
                    handleClose={togglePopup}
                    content={
                        <div className="d-flex flex-column mt-3 mb-3 p-3 deneme">
                            <form action="POST" onSubmit={submitHandler}>

                                <div className="input-group mt-4">
                                    <div className="input-group-prepend col-4">
                                        <label className="input-group-text profile-info-label" htmlFor="remember" >Ad :</label>
                                    </div>
                                    <input id="name" required type="text" className="form-control" defaultValue={info.user_name} />
                                </div>

                                <div className="input-group  mt-2">
                                    <div className="input-group-prepend col-4">
                                        <label className="input-group-text profile-info-label" htmlFor="remember" >Soyad :</label>
                                    </div>
                                    <input id="surname" required type="text" className="form-control" defaultValue={info.user_surname} />
                                </div>

                                <div className="input-group mt-2">
                                    <div className="input-group-prepend col-4">
                                        <label className="input-group-text profile-info-label" htmlFor="remember" >Email :</label>
                                    </div>
                                    <input id="email" required type="email" className="form-control" defaultValue={info.user_email} />
                                </div>

                                <div className="input-group mt-2">
                                    <div className="input-group-prepend col-4">
                                        <label className="input-group-text profile-info-label" htmlFor="remember" >Şifre :</label>
                                    </div>
                                    <input id="pass" required type="password" className="form-control" />
                                </div>

                                <div className="input-group mt-2">
                                    <div className="input-group-prepend col-4" >
                                        <label className="input-group-text profile-info-label" htmlFor="remember" >Şifre onayla :</label>
                                    </div>
                                    <input id="passConfirm" required type="password" className="form-control" />
                                </div>

                                <div className="input-group mt-2">
                                    <div className="input-group-prepend col-4">
                                        <label className="input-group-text profile-info-label" htmlFor="remember" >Kayıt tarihi:</label>
                                    </div>
                                    <input id="date" type="text" className="form-control" disabled value={new Date(info.user_creation_date).toLocaleDateString()} />
                                </div>

                                <div className="d-flex justify-content-end mt-2">
                                    <Buttons title="Gönder" />
                                </div>

                            </form>
                        </div>
                    }
                />
                }

            </div>

        </div>
    );
};
export default Profile;
