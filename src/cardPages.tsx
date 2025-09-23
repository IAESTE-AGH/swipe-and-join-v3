import React, { useState } from "react";
import Card from "./components/card.tsx";

const CardPages = () => {
  const [currentPage, setCurrentPage] = useState(0);

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
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <Card {...cards[currentPage]} />
      <div className="flex justify-between mt-4">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === cards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardPages;
