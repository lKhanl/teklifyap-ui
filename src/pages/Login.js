import React, { useEffect, useState } from "react";
import background from "../images/bg.jpg";
import Buttons from "../components/Buttons/Buttons";
import Input from "../components/Inputs/Input";
import { Link, useHistory } from "react-router-dom";
import UseHttp from "../api/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store/slices/Auth";
import warnIng from "../images/warning.svg";
import ToolTip from "../components/Inputs/ToolTip";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState([]);
    const [myArray, setmyArray] = useState(null);
    const [info, setInfo] = useState({});
    const Theme = useSelector((state) => state.theme.theme);
    const Auth = useSelector((state) => state.auth.authentication);
    const { isLoading, error, sendRequest: sendValues } = UseHttp();
    const dispatch = useDispatch();
    const history = useHistory();

    dispatch(AuthActions.logout());

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const loginHandler = (e) => {
        e.preventDefault();
        const values = {
            user_email: email,
            user_password: password,
        };

        fetch("http://localhost:8080/api/user/getByEmailAndPassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => setInfo(data));
    };
    useEffect(() => {
        if (info != null) {
            if (info != null && info.success == true) {
                dispatch(AuthActions.login(info.data));
                history.push("/");
            }
        }
    }, [info]);

    return (
        <div className="container-fluid position-relative overflow-hidden vh-100 p-0">
            <img className="background-img" src={background} alt="bg-image"></img>
            <div className="img-cover-color"></div>

            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4">
                        <div
                            className={
                                !Theme
                                    ? "d-flex justify-content-center flex-column align-items-center round round-default-theme"
                                    : "d-flex justify-content-center flex-column align-items-center round round-dark-theme"
                            }
                        >
                            <div className="mb-3 mt-5">
                                <div className="hover-me">
                                    <Buttons title="Facebook İle Giriş Yap" disabled={true} />
                                </div>
                                <ToolTip title1="Yakın zamanda eklenecek."></ToolTip>
                            </div>
                            <div>
                                <div className="hover-me">
                                    <Buttons title="Google İle Giriş Yap" disabled={true} />
                                </div>
                                <ToolTip title1="Yakın zamanda eklenecek."></ToolTip>
                            </div>

                            <div
                                className={
                                    !Theme
                                        ? "d-inline text-center mt-3 or-text or-text-default-theme user-select-none "
                                        : "d-inline text-center mt-3 or-text or-text-dark-theme user-select-none "
                                }
                            >
                                veya
                            </div>

                            <form
                                onSubmit={loginHandler}
                                className="d-flex flex-column align-items-center"
                            >
                                <div className="mt-3">
                                    <Input
                                        title="Email"
                                        enteredValue={emailHandler}
                                        inputValue={email}
                                    />
                                </div>

                                <div className="mt-3">
                                    <Input
                                        title="Şifre"
                                        enteredValue={passwordHandler}
                                        inputValue={password}
                                    />
                                </div>

                                <div className="align-self-end">
                                    <Link
                                        to="./PasswordP"
                                        className={
                                            !Theme
                                                ? "mx-3 password-remember-link password-remember-link-default-theme user-select-none"
                                                : "mx-3 password-remember-link password-remember-link-dark-theme user-select-none"
                                        }
                                    >
                                        Şifremi unuttum
                                    </Link>
                                </div>

                                <div className="d-flex align-self-start ms-3 checkbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                    />
                                    <label
                                        className={
                                            !Theme
                                                ? "form-check-label ms-2 user-select-none check-default-theme"
                                                : "form-check-label ms-2 user-select-none check-dark-theme"
                                        }
                                        htmlFor="remember"
                                    >
                                        Beni Hatırla
                                    </label>
                                </div>

                                {info.success == false && (
                                    <div className="col-11 user-select-none">
                                        <div className="d-flex align-self-start">
                                            <img className="warning-img d-inline" src={warnIng} />
                                            <div className="ms-1 warning-text">
                                                Email veya şifre yanlış
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="mt-3 w-100">
                                    <Buttons title="Giriş Yap" disabled={info.success ? true : false} />
                                </div>

                            </form>

                            <div
                                className={
                                    !Theme
                                        ? "text-center mt-3 or-text or-text-default-theme user-select-none account-none-text"
                                        : "text-center mt-3 or-text or-text-dark-theme user-select-none account-none-text"
                                }
                            >
                                Hesabın Yoksa
                            </div>
                            <Link
                                className="register-account-link user-select-none mt-2 pb-4"
                                to="./Register"
                            >
                                Kayıt Ol
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
