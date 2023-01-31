import EventDetails from "./EventDetails.js";
import { useState } from "react";

function Event() {
  const [more, SetMore] = useState(0);

  return (

      <div id="event-container">
        <center>
          <div className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-7xl md:text-8xl lg:text-8xl dark:text-orange-600 m-auto inline">
            EVENTS
          </div>

          {EventDetails.map((item) => (
            <div className="">
              <div className="shadow-2xl w-2/3 py-8 px-8 border border-orange-300 bg-white shadow dark:bg-[#fbecdd] dark:border-gray-200 shadow-lg rounded-lg my-5">
                <div
                  className={`flex  md:justify-end  ${
                    more == item.id ? "-mt-16 justify-center " : "mr-14 "
                  }`}
                >
                  <img
                    className={`object-cover rounded-full border-2 border-orange-500 ${
                      more == item.id
                        ? "w-20 h-20 animate-in fade-in zoom-in delay-50"
                        : "w-12 h-12 absolute right-30 "
                    }`}
                    src={item.imagesrc}
                  />
                </div>
                {more === item.id && (
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="lg:text-xl sm:text-sm font-medium text-orange-600"
                    >
                      {item.name}
                    </a>
                  </div>
                )}
                <div className="sm:relative lg:absolute justify-start ms:justify-start -mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="orange"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-orange-600 lg:text-1xl sm:text-sm font-semibold">
                    {item.time}
                  </h3>
                </div>
                <div>
                  <h2 className="text-orange-600 lg:text-3xl sm:text-2xl md:text-2xl font-semibold">
                    {item.eventname}
                  </h2>
                  <div className="flex justify-end">
                    <button className="-mt-5 text-orange-600 rounded-md outline-none focus:border-orange-600 focus:border">
                      {more == item.id ? (
                        <svg
                          onClick={() => SetMore(0)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                        
                          onClick={() => SetMore(item.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 hover:animate-bounce"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div>
                    {more === item.id && (
                      <hr class=" h-px lg:my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    )}
                    {more === item.id && (
                      <p className="mt-5 text-black">{item.desicription}</p>
                    )}
                  </div>
                </div>

                {more === item.id && (
                  <div className="flex justify-end pt-5 space-x-8">
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 sm:text-sm lg:text-lg font-medium text-center text-white bg-[#ee7c2f] rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#ee7c2f] dark:hover:bg-orange-600 dark:focus:ring-orange-400"
                    >
                      Click here
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </a>

                    {item.register==1 &&<a
                      href="#"
                      class="inline-flex items-center px-3 py-2 sm:text-sm lg:text-lg font-medium text-center text-white bg-[#ee7c2f] rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#ee7c2f] dark:hover:bg-orange-600 dark:focus:ring-orange-400"
                    >
                      Register
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </a>}
                  </div>
                )}
              </div>

              {/* {EventDetails.map((item) => (
          <div className="flex flex-col ml-16 mr-10 mt-10">
            

            <img
              className=" rounded-full	w-80 "
              src={item.imagesrc}
              alt="Speaker"
              />
        
            <div className="text-2xl font-bold text-orange-600">
              {" "}
              {item.name}
            </div>
            
            
          </div>
      ))} */}
            </div>
          ))}
        </center>
      </div>

  );
}

export default Event;
