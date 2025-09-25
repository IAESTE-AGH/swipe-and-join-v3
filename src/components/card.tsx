import { useState } from "react";

type CardProps = {
  title: string;
  description?: string; //Optional, made for the card on which the user choses interests
  items: string[];
  activeIdx: number | null;
  setActiveIdx: React.Dispatch<React.SetStateAction<number | null>>;
};

const Card = ({
  title,
  description,
  items,
  activeIdx,
  setActiveIdx,
}: CardProps) => {
  return (
    <div className="bg-white w-[50vw] flex flex-col items-center justify-center gap-y-10">
      <h2 className="text-5xl font-bold">{title}</h2>
      {/* <div className="text-gray-700 ">{description}</div> */}
      <div className="  w-full flex flex-col gap-2 ">
        {items.map((item, idx) => (
          <div
            onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
            className={`w-full border-[2px] text-2xl py-1 font-semibold  rounded-full flex items-center justify-center ${
              idx === activeIdx
                ? "border-[#5cc8ee] text-[#5cc8ee]"
                : "border-gray-300 text-gray-500"
            }`}
            key={idx}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
