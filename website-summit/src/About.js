import pic from "./images/about.jpg";

function About() {
  return (
    <>
    <div className="pt-20"></div>
      <div className="flex max-[500px]:flex-col">
        <div className="px-10 max-[500px]:pt-40 max-[500px]:px-1 max-[500px]:pr-5  min-[500px]:w-1/2 min-[600px]:pt-12 min-[1200px]:pt-20 ">
          <div className="text-center max-[500px]:mt-6 ">
            <div className="text-5xl flex py-7 font-extrabold">
              <h1>
                ABOUT <span className="text-orange-600"> SUMMIT</span>
              </h1>
            </div>
            <div className="flex">
              <div className="w-10 h-20 mr-5 mt-2 bg-orange-600"></div>
              <p className="text-justify font-normal text-xl ">
                Kerala Startup Mission is organizing the seventh edition of the
                flagship event- IEDC Summit 2023 and we, Rajagiri School of
                Engineering and Technology, heartily welcome you to witness and
                be a part of Asia's largest summit for aspiring student
                innovators and entrepreneurs.
              </p>
            </div>
            <br />
            <p className="ml-7 text-justify font-normal text-xl">
              IEDC Summit is an amalgamation of events from a plethora of
              domains, including technology, entrepreneurship, skill
              development, and so much more. It facilitates as a platform for
              connecting student innovators, industry leaders, and various
              startups in addition to providing an opportunity for them to
              engage and network, and form connections that lasts for a
              lifetime. Meet highly influential entrepreneurs, imbibe from panel
              discussions, expand your horizons in technical knowledge and
              financial literacy.
            </p>
            <br />
            <p className="text-2xl font-bold"> Let's unravel dimensions and unite perspectives together!</p>
          </div>
        </div>
        <div className=" flex   min-[500px]:w-1/2 min-[500px]:pt-20 max-[900px]:pt-60 max-[700px]:pt-10 ">
          <img className="pt-10 lg:w-90 " src={pic}></img>
        </div>
      </div>
    </>
  );
}

export default About;
