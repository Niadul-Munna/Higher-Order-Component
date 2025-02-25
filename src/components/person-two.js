import React from "react";

const PersonTwo = () => {
  return (
    <div className="flex gap-2 items-center">
      <h1>Sally is offering $10</h1>
      <button className="bg-blue-500 px-3 py-1 rounded-tr-lg rounded-bl-lg hover:bg-blue-600 hover:translate-y-[2px] transition-all ">
        Increase Money
      </button>
    </div>
  );
};

export default PersonTwo;
