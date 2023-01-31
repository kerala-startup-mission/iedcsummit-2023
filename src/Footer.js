import React from "react";
import iedc from "./images/iedc_logo.png";
import ksum from "./images/KSUM.png";
import rsetiedc from "./images/iedcrset.png";
import rsetlogo from "./images/rset_logo.png";
const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 ">
      <div className="grid flex-col grid-cols-2 flex ">
        <div className="justify-center center">
          <div className="flex justify-center min-[500px]:space-x-10">
            <img className="h-8 w-30" src={iedc} />
            <img className="h-14 w-30" src={ksum} />
          </div>
          <ul>
            <li className="mb-4">
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                G3B, Thejaswini, Technopark Campus
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                Kariyavattom, Trivandrum, Kerala 695581
              </p>
            </li>
            <li>
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                For Queries
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-400">
                iedckerala@startupmission.in
              </p>
            </li>

            <li>
              <p className="pt-5 text-gray-600 hover:underline dark:text-gray-400">
                Salini V R
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                salini@startupmission.in
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                9633245595
              </p>
            </li>
          </ul>
        </div>
        <div className="justify-center center">
          <div className="flex justify-center min-[500px]:space-x-10">
            <img className="h-8 w-30" src={rsetlogo} />
            <img className="h-14 w-30" src={rsetiedc} />
          </div>
          <ul className="">
            <li className="mb-4">
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                Rajagiri Valley, Kakkanad
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                Kochi, Kerala, 682039
              </p>
            </li>
            <li>
              <p className="text-gray-600 hover:underline  dark:text-gray-600 max-[440px]:pt-12 ">
                For Queries
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-400">
                rsetiedc@rajagiritech.edu.in
              </p>
            </li>

            <li>
              <p className="pt-5 text-gray-600 hover:underline dark:text-gray-400">
                Mr Niteesh Kurien
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                niteeshk@rajagiritech.edu.in
              </p>
              <p className="text-gray-600 hover:underline dark:text-gray-600">
                9497413879
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="flex space-x-6 justify-center sm:mt-0 pt-8">
          <a
            href="https://www.facebook.com/people/RSET-IEDC/100068476695865/"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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
          <a href="">KSUM</a>
          <a href="https://rsetiedc.in/">IEDC RSET</a>
          <a href="https://www.rajagiritech.ac.in/">RSET</a>
          <a href="https://iedc.startupmission.in/">IEDC</a>
        </div>

        <div class="w-full mx-auto text-center pt-2">
          <div class=" text-blueGray-500 py-1">
            <p className="text-gray-600">
              Copyright © 2023 Kerala Startup Mission. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
