import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string; //Optional, made for the card on which the user choses interests
  items: string[];
};

const Card = ({ title, description, items }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="text-gray-700 mb-3">{description}</div>
      <div className="list-disc list-inside text-gray-600">
        {items.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
