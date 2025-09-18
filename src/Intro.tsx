import iaesteLogo from "./assets/other/iaesteLogo.ico";
import arrow from "./assets/other/angle-double-small-right.png";
import React, { useEffect, useState } from "react";
import config from "../src/utils/tailwindUtils.cjs";

type Props = {
  labels: string[][];
  //enables adding headings to the page dynamically (ex. "Struktura IAESTE", "IAESTE dzieli się na 6 grup roboczych, ...")
};

//generating values for mt- in div id='content-align'
function exponentialSequence(n: number, a = 8, b = 1.3): number {
  return a * Math.pow(b, n);
}

function Intro({ labels }: Props) {
  const [classNames, setClassNames] = useState<string[]>([]);
  const [logoClassNames, setLogoClassNames] = useState<string[]>([]);

  useEffect(() => {
    const generatedClassesMt = config.applyValuesToBreakpoints(
      "mt-",
      config.valuesMt
    );
    console.log(generatedClassesMt);
    setClassNames(generatedClassesMt);
    const generatedLogoClasses = config.applyValuesToBreakpoints(
      "h-",
      config.valuesH
    );
    setLogoClassNames(generatedLogoClasses);
  }, []); //useEffect runs once

  return (
    <div className="flex flex-col  items-center gap-x-1 w-screen h-screen bg-white font-pop">
      <div
        id="content-align"
        className={`h-screen w-[50vw] md:mb-[7vh] md:mt-[0vh] sm:mb-[3vh] mb-[0vh]  ${classNames.join(
          " "
        )} flex flex-col justify-center   bg-white text-[5vh] gap-y-5`}
      >
        <div className="flex justify-center items-center">
          <img
            src={iaesteLogo}
            className={`md:h-[8vh]  sm:h-[7vh]  ${logoClassNames.join(" ")}`}
            alt=""
          />
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
          <button className="flex justify-center items-center bg-[#5cc8ee] md:mt-[3vh] sm:mt-[0vh] font-medium text-white h-[6vh] w-[35vw] text-lg rounded-full focus:outline-none focus:border-none">
            Zaczynamy!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
