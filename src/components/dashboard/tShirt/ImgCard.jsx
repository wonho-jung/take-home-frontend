import React from "react";
import tShirtImagePath from "../../../asset/images/tShirt.png";
import { headingStyles } from "../../shared/designSystem";

const ImgCard = ({ size, sizeChangeHandler, tShirtSize }) => {
  return (
    <div className="max-w-sm bg-blue-50 border border-blue-100 rounded-lg shadow m-4">
      <div className="p-4 text-center">
        <h5 className={`mb-2 tracking-tight text-gray-900 ${headingStyles.h5}`}>
          Men's Premium T-Shirt
        </h5>

        <div className="flex justify-center">
          <img src={tShirtImagePath} width={180} height={180} alt="t-shirt" />
        </div>

        <p> {size}</p>
        <input
          type="radio"
          value={size}
          checked={size === tShirtSize}
          onChange={() => {
            sizeChangeHandler(size);
          }}
        />
      </div>
    </div>
  );
};

export default ImgCard;
