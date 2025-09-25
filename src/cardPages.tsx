import React, { useState } from "react";
import Card from "./components/card.tsx";

const CardPages = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const cards = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      items: ["Item 1", "Item 2", "Item 3"],
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      items: ["Item 4", "Item 5", "Item 6"],
    },
    {
      title: "Card 3",
      description: "Description for Card 3",
      items: ["Item 7", "Item 8", "Item 9"],
    },
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
    setActiveIdx(null); // Reset selection when moving to the next page
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    setActiveIdx(null); // Reset selection when moving to the previous page
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col  gap-y-10 h-screen">
        <Card
          {...cards[currentPage]}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
        <button
          onClick={nextPage}
          disabled={activeIdx === null}
          className={`w-[50vw] py-1 rounded-full font-semibold transition-colors duration-200 text-2xl py-2
          ${
            activeIdx === null
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#5cc8ee] text-white "
          }`}
        >
          Kontynuuj
        </button>
      </div>

      <div className="absolute top-0 left-0">
        <button onClick={prevPage} disabled={currentPage === 0}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "60px", height: "60px" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d1d5db"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardPages;
