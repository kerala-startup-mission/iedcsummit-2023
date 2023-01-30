import "./App.css";
import Home from "./Homepage.js";
import About from "./About.js";
import Speakers from "./Speakers.js";
import Event from "./Event.js";
import Schedule from "./Schedule.js";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer.js";

function Banner() {
  return (
    <>
      <div class=" flex mt-10 bg-ban-ner w-screen    justify-around items-center mb-10  ">
        <div className="flex  flex-col  items-start text-white  py-1  px-1 justify-center ">
          <div className="lg:text-7xl md:text-4xl  sm:text-1xl  font-bold">
            425
          </div>
          <div className="lg:text-4xl  md:text-2xl  sm:text-1xl">IEDCs</div>
        </div>

        <div className="flex flex-col  items-start text-white py-10 justify-center ">
          <div className="lg:text-7xl  md:text-4xl sm:text-1xl  font-bold">
            8K+
          </div>
          <div className="lg:text-4xl  md:text-2xl  sm:text-1xl sm:text-sm">
            Changemakers
          </div>
        </div>

        <div className="flex flex-col items-start  text-white py-10 ">
          <div className="lg:text-7xl  md:text-4xl sm:text-1xl  font-bold">
            50K+
          </div>
          <div className="lg:text-4xl  md:text-2xl  sm:text-1xl ">
            Innovators
          </div>
        </div>

        <div className="flex flex-col items-start	 text-white py-10 ">
          <div className="lg:text-7xl md:text-4xl  sm:text-1xl  font-bold">
            336+
          </div>
          <div className="lg:text-4xl md:text-2xl  sm:text-1xl ">StartUps</div>
        </div>

        <div className="flex flex-col 	items-start text-white  py-10 ">
          <div className="lg:text-7xl  md:text-4xl sm:text-1xl font-bold">
            5K+
          </div>
          <div className="lg:text-4xl  md:text-2xl sm:text-1xl">Activities</div>
        </div>
      </div>
    </>
  );
}

export default Banner;
