import iaesteLogo from "./assets/other/iaesteLogo.ico";
import arrow from "./assets/other/angle-double-small-right.png";
import React from "react";

function Intro({ labels }: { labels: string[][] }) {
  return (
    <div className="flex flex-col  items-center gap-x-1 w-screen h-screen bg-white font-pop">
      <div className="h-screen w-[50vw] mb-[10vw] flex flex-col justify-center   bg-white text-[5vh] gap-y-5">
        <div className="flex justify-center items-center">
          <img src={iaesteLogo} className="h-[7.5vh] w-[8.5vw]" alt="" />
        </div>

        {labels.map((item, index) => {
          const [heading, label] = item;
          return (
            <div key={index} className="flex flex-col gap-0 ">
              <h2 className="text-lg font-[600]  flex gap-x-2  text-gray-600">
                <img src={arrow} alt=" >> " className="" />
                {heading}
              </h2>
              <p className="text-base text-gray-500 font-normal leading-tight">
                {label}
              </p>
            </div>
          );
        })}
        <div className="flex justify-center items-center mt-[5vh]">
          <button className="bg-[#5ECCE8] mt-[3vh] font-medium text-white h-[6vh] w-[35vw] text-lg rounded-full focus:outline-none focus:border-none">
            Zaczynamy!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
