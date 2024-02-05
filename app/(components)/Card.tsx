"use client";
import React from "react";
const Card: React.FC<{ title: string; data: string }> = ({ title, data }) => {
  return (
    <div className="outline-gray-300 rounded-md outline py-3 px-5 outline-1">
      <label className="font-semibold">{title.toUpperCase()}</label>
      <h3 className="">{data}</h3>
    </div>
  );
};

export default Card;
