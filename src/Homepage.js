import logo from "./images/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pic from "./images/about.png";
import iedc from "./images/iedc-wh.png";
import ksum from "./images/KSUM.png";
import rsetiedc from "./images/rsetinnov.png";
import rsetlogo from "./images/rset-transparent.png";
import "./App.css";
import "./fonts/fragile.otf";
// import SpeakerDetails from "./SpeakerDetails";

function Homepage() {
  const [navbar, setNavbar] = useState(false);

  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAboutScroll = () => {
    const element = document.getElementById("section-about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Mar 03, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      {showButton && (
        <button onClick={handleClick} className="go-to-top-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="orange"
            class="w-9 h-9 hover:animate-bounce rounded-full bg-white shadow-xl"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 13.5l4.5-4.5 3.5 4.5"
            />
          </svg>
        </button>
      )}
      <div className="bg-cover bg-[url('images/bgggg.jpg')]  bg-opacity-100">
        <div className="bg-black bg-opacity-50 w-full h-screen pb-5">
          <nav className="w-full ">
            <div className="justify-between px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-5  ">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <Link to="/" className="flex items-center">
                    <img
                      src={logo}
                      className="h-10 mr-3 sm:h-20 shadow-gray-800 dark:shadow-gray-800 left-10"
                      alt="IEDC Logo"
                    />
                    <span className="font-bold text-2xl self-center font-semibold text-white whitespace-nowrap dark:text-white font-poppins">
                      IEDC Summit
                    </span>
                  </Link>

                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          strokeWidth={2}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          strokeWidth={2}
                          onClick={() => setNavbar(false)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 absolute ${
                    navbar
                      ? "top-10 left-0.5 right-1 block"
                      : "hidden top-10 right-10"
                  }`}
                >
                  <ul
                    className={`items-center justify-center space-y-8 md:flex md:space-x-5 md:space-y-0 md:flex pb-5 pt-5 ${
                      navbar ? "bg-black bg-opacity-80 w-screen" : ""
                    }`}
                  >
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3 font-poppins">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3 font-poppins">
                      <div
                        className="cursor-pointer"
                        onClick={handleAboutScroll}
                      >
                        About
                      </div>
                    </li>
                    {/* <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <div className="cursor-pointer" onClick={scrollToEvents}>
                        Events
                      </div>
                    </li>
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <div className="cursor-pointer" onClick={scrollToSpeaker}>
                        Speakers
                      </div>
                    </li>
                    <li className="text-white hover:text-orange-600 text-xl font-medium px-3">
                      <Link to="schedule">Schedule</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>



          <div className="  ">

          <div className="inline-block ">
            <div class="pt-20 ">
              <h1 className=" lg:text-start md:text-center sm:text-center font-poppins text-2xl text-white dark:text-white  font-poppins">
                Asia's Largest Summit for Aspiring Entrepreneurs
              </h1>
            </div>

            <div className=" font-poppins">
              <h1 className="pt-2 text-5xl font-extrabold leading-none tracking-tight text-white sm:text-7xl md:text-6xl lg:text-8xl dark:text-white mx-auto inline">
                IEDC{" "}
                <span className="text-orange-600 dark:text-orange-600">
                  SUMMIT
                </span>{" "}
                <span className="text-white">2023</span>
              </h1>
              <div className="text-right">
                <h1 className="lg:text-right bg-orange-600 inline-block	md:text-center sm:text-center px-3 py-2 text-xl  leading-none tracking-tight text-white  dark:text-white font-poppins">
                  Unravelling Dimensions Uniting Perspectives{" "}
                </h1>
              </div>
            </div>

          </div> 


            <div className="pt-10 flex justify-center font-poppins">
              <div className="">
                <p className="text-1xl font-bold basis-28  leading-none tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                  {timerDays}
                </p>
                <span className="text-white">Days</span>
              </div>
              <div className="">
                <p className="text-1xl basis-28 font-bold leading-none tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                  {timerHours}
                </p>
                <span className="text-white">Hours</span>
              </div>
              <div className="">
                <p className="text-1xl font-bold basis-28 leading-none tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                  {timerMinutes}
                </p>
                <span className="text-white">Minutes</span>
              </div>
              <div className="">
                <p className="text-1xl font-bold basis-28 leading-none tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl dark:text-white px-10">
                  {timerSeconds}
                </p>
                <span className="text-white">Seconds</span>
              </div>
            </div>

            <h4 className=" flex justify-center items-center pt-5 lg:text-3xl  sm:text-2xl md:text-2xl text-white dark:text-white font-poppins">
              <svg
                className="h-7 w-7 text-orange-600 dark:text-orange-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                ></path>
              </svg>
              Rajagiri School of Engineering and Technology
            </h4>

            <div className=" space-x-20 flex flex-row justify-center pt-10 ">
              <button
                type="button"
                className="tracking-wide w-80 h-14  sm:text-md rounded-full lg:text-lg focus:outline-none text-white bg-orange-600 hover:bg-orange-700 focus:ring-2 focus:ring-orange-900 rounded-lg sm:text-md font-bold px-5 lg:py-2.5 mr-2 mb-2 dark:focus:ring-orange-900 font-poppins"
              >
                Buy Tickets
              </button>
              <button
                type="button"
                className="font-poppins tracking-wide  sm:text-md w-80 h-14 text-white hover:text-white border border-white-600 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-white-300 rounded-full lg:text-lg font-bold px-10 lg:py-2.5 text-center mr-10 border-white-300 mb-10 focus:ring-orange-900 border-white-300 dark:border-white-300 dark:text-white dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
              >
                View Schedule
              </button>
            </div>
          </div>
        </div>

        {/* ************************************ABOUT************************************ */}
        <div className="lg:flex md:flex bg-white font-poppins " id="section-about">
          <div className="lg:w-1/2 lg:pt-24 pl-5 md:w-1/2 md:pl-8 sm:pl-4 md:pr-4 sm:pr-4 mr-10">
            <div className="text-center pt-5 sm:pt-0 ">
              <h1 className="font-poppins pt-1 text-3xl md:text-4xl font-extrabold md:justify-start text-gray-900 pb-4  dark:text-black ">
                ABOUT{" "}
                <span className="font-poppins text-orange-600 dark:text-orange-600">
                  SUMMIT
                </span>{" "}
              </h1>
              <div className="flex">
                <div className="w-10 h-20 mr-4  mt-2 bg-orange-600"></div>
                <p className="text-justify font-normal text-lg font-poppins">
                  Kerala Startup Mission is organizing the seventh edition of
                  the flagship event- IEDC Summit 2023 and we, Rajagiri School
                  of Engineering and Technology, heartily welcome you to witness
                  and be a part of Asia's largest summit for aspiring student
                  innovators and entrepreneurs.
                </p>
              </div>
              <br />
              <p className="ml-7 text-justify font-normal text-lg font-poppins">
                IEDC Summit is an amalgamation of events from a plethora of
                domains, including technology, entrepreneurship, skill
                development, and so much more. It facilitates as a platform for
                connecting student innovators, industry leaders, and various
                startups in addition to providing an opportunity for them to
                engage and network, and form connections that lasts for a
                lifetime. Meet highly influential entrepreneurs, imbibe from
                panel discussions, expand your horizons in technical knowledge
                and financial literacy.
              </p>
              <br />
              <p className="text-xl font-bold font-poppins">
                Let's unravel dimensions and unite perspectives together!
              </p>
            </div>
          </div>
          <div className="lg:pl-10 lg:w-1/2 md:w-1/2 ">
            <img className="pt-10 lg:w-90 max-[500px]:pl-4" src={pic}></img>
          </div>
        </div>
      </div>

      {/****************************************************************************** BANNER***************************************************************************** */}

      <div className="bg-white justify pt-3  w-full font-poppins">
        <div class=" flex  bg-ban-ner w-full   justify-around items-center   ">
          <div className="flex  flex-col  items-center text-white  py-1  px-1 justify-center ">
            <div className="font-poppins lg:text-7xl md:text-4xl  sm:text-1xl  font-bold">
              425
            </div>
            <div className="font-poppins lg:text-xl  md:text-lg  sm:text-1xl">IEDCs</div>
          </div>

          <div className="flex flex-col  items-center text-white py-10 justify-center ">
            <div className="font-poppins lg:text-7xl  md:text-4xl sm:text-1xl  font-bold">
              8K+
            </div>
            <div className="font-poppins lg:text-xl  md:text-lg  sm:text-1xl sm:text-sm">
              Changemakers
            </div>
          </div>

          <div className="flex flex-col items-center  text-white py-10 ">
            <div className="font-poppins lg:text-7xl  md:text-4xl sm:text-1xl  font-bold">
              50K+
            </div>
            <div className="font-poppins lg:text-xl  md:text-lg  sm:text-1xl ">
              Innovators
            </div>
          </div>

          <div className="flex flex-col items-center	 text-white py-10 ">
            <div className="font-poppins lg:text-7xl md:text-4xl  sm:text-1xl  font-bold">
              336+
            </div>
            <div className="font-poppins lg:text-xl  md:text-lg  sm:text-1xl ">
              Startups
            </div>
          </div>

          <div className="flex flex-col 	items-center text-white  py-10 ">
            <div className="font-poppins lg:text-7xl  md:text-4xl sm:text-1xl font-bold">
              5K+
            </div>
            <div className="font-poppins lg:text-xl  md:text-lg sm:text-1xl">
              Activities
            </div>
          </div>
        </div>
      </div>

      {/* ***********************************************SPEAKERS ***********************************/}

      {/* <div
        className=" speaker-container pl-10 pr-10 pt-10 pb-10"
        id="speaker-container"
      >
        <div className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-7xl md:text-8xl lg:text-8xl dark:text-orange-600 m-auto inline font-face-gm">
          Speakers
        </div>
        <div className=" flex flex-wrap justify-center ">
          {SpeakerDetails.map((item) => (
            <div className="flex flex-col ml-16 mr-10 mt-10">
              <img
                className=" rounded-full	w-60 "
                src={item.imagesrc}
                alt="Speaker"
              />

              <div className="text-3xl  text-orange-600"> {item.name}</div>

              <div className="text-2xl  opacity-70"> {item.occ}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* ***********************************************************FOOTER ************************************************************/}
      <footer className="pt-2 bg-gray-900 justify-center dark:bg-gray-900 font-poppins ">
        <div className="grid flex md:grid-cols-2 lg:grid-cols-2   ">
          <div className="justify-center center">
            <div className="flex flex-row justify-center items-center space-x-5 py-5">
              <img className="h-20" src={ksum} />
              <img className="h-12  w-26 sm:w-30" src={iedc} />
            </div>
            <ul>
              <li className="mb-4">
                <p className="font-poppins text-white">
                  G3B, Thejaswini, Technopark Campus
                </p>
                <p className="font-poppins text-white">
                  Kariyavattom, Trivandrum, Kerala 695581
                </p>
              </li>
              <li>
                <p className="font-poppins text-white">For Queries</p>
                <p className="font-poppins text-white text-sm lg:text:md ">
                  iedckerala@startupmission.in
                </p>
              </li>

              <li>
                <p className="font-poppins pt-5 text-white">
                  Bergin S Russel
                </p>
                <p className="font-poppins text-white">
                  iedckerala@startupmission.in
                </p>
                <p className="font-poppins text-white">6238998379</p>
              </li>
            </ul>
          </div>
          <div className="justify-center center">
            <div className="flex justify-center space-x-10 py-5">
              <img className="mt-3 h-10 w-30" src={rsetlogo} />
              <img className="h-16 w-30" src={rsetiedc} />
            </div>
            <ul className="">
              <li className="mb-4">
                <p className="font-poppins text-white">
                  Rajagiri Valley, Kakkanad
                </p>
                <p className="font-poppins text-white">
                  Kochi, Kerala, 682039
                </p>
              </li>
              <li>
                <p className="font-poppins text-white ">
                  For Queries
                </p>
                <p className="font-poppins text-white text-sm lg:text:md">
                  rsetiedc@rajagiritech.edu.in
                </p>
              </li>

              <li>
                <p className="font-poppins pt-5 text-white">
                  Nitheesh Kurian
                </p>
                <p className="font-poppins text-white">
                  nitheeshk@rajagiritech.edu.in
                </p>
                <p className="font-poppins text-white">9497413879</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="flex space-x-6 justify-center sm:mt-0 pt-8">
            <a
              href="https://www.facebook.com/people/RSET-IEDC/100068476695865/"
              class="text-gray-500 hover:text-white dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rsetiedc/?igshid=10lmkxmqfwgjh"
              class="text-gray-500 hover:text-white dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rset-iedc/">
              <svg
                // xmlns="http://www.w3.org/2000/svg"
                src="url(`https://www.svgrepo.com/show/922/linkedin.svg`)"
                width="20"
                height="20"
                fill="gray"
                class="bi bi-linkedin hover:bg-white"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-white dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/channel/UCVzfXE9R2PBBDJyJmPwSyQQ"
              class="text-gray-500 hover:text-white dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />{" "}
              </svg>
            </a>
          </div>
          <div class="w-full md:w-4/12 space-x-10 px-1 mx-auto text-center pt-4 text-gray-600 dark:text-gray-600">
            <a
              href="https://startupmission.kerala.gov.in/"
              className="font-poppins hover:text-orange-500"
            >
              KSUM
            </a>
            <a href="https://rsetiedc.in/" className="font-poppins hover:text-orange-500">
              IEDC RSET
            </a>
            <a
              href="https://www.rajagiritech.ac.in/"
              className="font-poppins hover:text-orange-500"
            >
              RSET
            </a>
            <a
              href="https://iedc.startupmission.in/"
              className="font-poppins hover:text-orange-500"
            >
              IEDC
            </a>
          </div>

          <div class="w-full mx-auto text-center pt-2">
            <div class=" text-blueGray-500 py-1">
              <p className="font-poppins text-gray-600">
                Copyright © 2023 Kerala Startup Mission. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
