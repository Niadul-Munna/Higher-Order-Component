"use client";
import React, { useState } from "react";

const UpdatedComponent = (OrignalComponent) => {
  const NewComponent = () => {
    const [data, setData] = useState(10);
    const handleIncrease = () => {
      setData(data + 10);
    };
    const handleDecrease = () => {
      setData(data - 5);
    };
    return (
      <OrignalComponent
        data={data}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
    );
  };
  return NewComponent;
};

export default UpdatedComponent;
