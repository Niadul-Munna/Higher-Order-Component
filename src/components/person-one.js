"use client";
import React, { useState } from "react";

const PersonOne = () => {
  const [data, setData] = useState(10);
  const handleIncrease = () => {
    setData(data + 10);
  };
  const handleDecrease = () => {
    setData(data - 5);
  };
  return (
    <div className="flex gap-2 items-center">
      <h1>
        John is offering{" "}
        <span className="font-semibold italic text-lg"> ${data}</span>
      </h1>
      <button
        onClick={handleIncrease}
        className="bg-green-500 px-3 py-1  rounded-tr-lg rounded-bl-lg hover:bg-green-600 hover:translate-y-[2px] transition-all "
      >
        Increase Money
      </button>
      <button
        onClick={handleDecrease}
        className="bg-red-500 px-3 py-1 rounded-tr-lg rounded-bl-lg hover:bg-red-600 hover:translate-y-[2px] transition-all "
      >
        Decrease Money
      </button>
    </div>
  );
};

export default PersonOne;
