import React from "react";

type CardProps = {
  title: string;
  value: string;
};

const Card = ({ title, value }: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
