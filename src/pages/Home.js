import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Slider from "../components/Slider/Slider";
import { About } from "../components/About";
import { Vision } from "../components/Vision";
import { Team } from "../components/Team";
import bg2 from "../images/bg2.jpg";
import bg from "../images/bg.jpg";
import { ScrollAnimation } from "../components/Animations/ScrollAnimation";
import { GetPath } from "../components/Animations/ScrollToTop";
export default function Home() {
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    ScrollAnimation();
    console.log('working')
  },[GetPath()]);

  return (
    <>
      <div className="container-fluid p-0 m-0 position-relative user-select-none ">
        {/*<div className="overflow-hidden">
  //    <img className="bg-2" src={bg2} alt='bg-2'></img>
  //    <img className="bg-1" src={bg} alt='bg-1'></img>
    </div>*/}
        <div>
          <div className="m-0 p-0 ">
            <Slider></Slider>
          </div>

          <div className="m-0 p-0 ">
            <About></About>
          </div>
          <div className="mt-5 pt-5">
            <Team></Team>
          </div>
          <div className="mt-5 pt-5 pb-5">
            <Vision></Vision>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};
