import React, { Suspense, useState } from "react";
import { Home } from "./pages/Home";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";

import PasswordP from "./pages/PasswordP";
import { NotFound } from "./pages/NotFound";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/Animations/ScrollToTop";
import LoadingBar from "react-top-loading-bar";

const ProfilePage = React.lazy(() => import("./pages/Profile"));
const HomePage = React.lazy(() => import("./pages/Home"));
const OffersPage = React.lazy(() => import("./pages/Offers"));
const InventoryPage = React.lazy(() => import("./pages/Inventory"));
const RegisterPage = React.lazy(() => import("./pages/Register"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const MakeOfferPage = React.lazy(() => import("./pages/MakeOffer"));


const App = () => {
  const Auth = useSelector((state) => state.auth.authentication);
  const Theme = useSelector((state) => state.theme.theme);
  const [progress, setProgress] = useState(0);
  document.body.style = !Theme ? null : "background: #40403E;";
  document.body.style.transition = "all 1s";

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="position-fixed navindex w-100">
        <Navbar></Navbar>
      </div>
      <div className="nav-space">
        <Suspense
          fallback={
            <div className="bg-primary">
              <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-grow"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
        >
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            {Auth ? (
              <Route path="/Offers">
                <OffersPage />
              </Route>
            ) : null}
            {Auth && <Route path="/PasswordP" component={PasswordP}></Route>}
            {Auth && (
              <Route path="/Inventory">
                <InventoryPage />
              </Route>
            )}
            {Auth && (
              <Route path="/Profile">
                <ProfilePage />
              </Route>
            )}
            {Auth && (
              <Route path="/MakeOffer">
                <MakeOfferPage />
              </Route>
            )}
            <Route path="/Login">
              <LoginPage />
            </Route>
            {/*<Route path="/Home" component={Home}></Route>*/}
            <Route path="/Register">
              <RegisterPage />
            </Route>
            {/* <Route path="*" component={NotFound}></Route>*/}
            {!Auth && <Redirect to="/Login" />}
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
