import React from "react";
import { headingStyles } from "../shared/designSystem";

const SummaryCard = ({ title, total, noMargin }) => {
  return (
    <div className={`w-full border rounded ${noMargin ? "mr-0" : "mr-2"} p-4`}>
      <p className="text-gray-600">{title}</p>
      <h2 className={`${headingStyles.h2}`}>{total}</h2>
    </div>
  );
};

export default SummaryCard;
