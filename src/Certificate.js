import React from "react";
import { award, logo, machine, photo } from "./images";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

const Certificate = () => {
  return (
    <div className="App w-full h-full">
      <div className="flex justify-center">
        <div className="w-2/5">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
      </div>
      <div className="w-full flex h-full">
        <div className="w-[36%] flex justify-center">
          <img src={award} alt="award" className="w-[90%] h-full" />
        </div>
        <div className="w-[64%] md:px-2 px-1 h-full">
          <div>
            <p className="lg:text-sm md:text-xs text-[0.6rem] font-semibold">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <ul className="list-disc lg:pl-8 pl-6 md:py-2 py-1">
              <li className="md:text-xs text-[0.6rem]">
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li className="lg:text-xs text-[0.6rem]">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <div className="w-full md:py-2 py-1">
            <img src={photo} alt="photos" className="w-full h-full" />
          </div>
          <p className="lg:text-xs text-[0.6rem]">
            Government of India has awarded the{" "}
            <span className="font-semibold">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="md:px-4 px-2 py-2">
        <p className="lg:text-sm md:text-xs text-[0.6rem]">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="flex justify-center pt-5">
          <img src={machine} alt="machine" className="w-4/5 h-full" />
        </div>
        <div className="text-center">
          <p className="lg:text-xs text-[0.6rem] pb-2">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr className="border-[1px] border-red-700" />
      </div>
      <div className="text-center pt-1 md:pb-3 pb-2">
        <p className="lg:text-sm text-xs font-semibold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="lg:text-xs text-[0.6rem] lg:px-10 px-4 py-1">
          CHEMICALS & PROCESS{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> POWER{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> WATER &
          WASTE WATER <span className="text-red-700 lg:text-sm text-xs">|</span>{" "}
          OILS & GAS <span className="text-red-700 lg:text-sm text-xs">|</span>{" "}
          PHARMA SUGARS & DISTILLERIES{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> PAPER &
          PULP <span className="text-red-700 lg:text-sm text-xs">|</span> MARINE
          & DEFENCE <span className="text-red-700 lg:text-sm text-xs">|</span>{" "}
          METAL & MINING{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> FOOD &
          BEVERAGE <span className="text-red-700 lg:text-sm text-xs">|</span>{" "}
          PETROCHEMICAL & REFINERIES{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> SOLAR{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> BUILDING{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> HVAC{" "}
          <span className="text-red-700 lg:text-sm text-xs">|</span> FIRE
          FIGHTING <span className="text-red-700 lg:text-sm text-xs">|</span>{" "}
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="px-1 py-1">
        <div className="w-full bg-red-500 flex justify-between lg:px-32 md:px-16 px-5 py-5">
          <div className="flex">
            <FaSquarePhone className="text-white lg:text-2xl text-xl rounded-full" />
            <p className="lg:text-xs text-[0.6rem] px-1 text-white pt-3">
              Toll free <b>1800 200 1234</b>
            </p>
          </div>
          <div className="flex">
            <FaFacebook className="text-white lg:text-2xl text-xl" />
            <p className="lg:text-xs text-[0.6rem] text-white pt-3 px-1">
              www.facebook.com/cripumps
            </p>
          </div>
          <div className="flex">
            <FaGlobe className="text-white lg:text-2xl text-xl" />
            <p className="lg:text-xs text-[0.6rem] text-white pt-3 px-1">
              www.crigroups.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
