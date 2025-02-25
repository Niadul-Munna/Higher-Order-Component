"use client";
import UpdatedComponent from "@/hoc/handle-button";
import React from "react";

const PersonTwo = ({ data, handleIncrease, handleDecrease }) => {
  return (
    <div className="flex gap-2 items-center">
      <h1>
        Sally is offering{" "}
        <span className="font-semibold italic text-lg"> ${data}</span>
      </h1>
      <button
        onClick={handleIncrease}
        className="bg-blue-500 px-3 py-1 rounded-tr-lg rounded-bl-lg hover:bg-blue-600 hover:translate-y-[2px] transition-all "
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

export default UpdatedComponent(PersonTwo);
