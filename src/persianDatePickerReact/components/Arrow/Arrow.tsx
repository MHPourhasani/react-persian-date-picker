import React from "react";

// interface
import { ArrowProps } from "./ArrowInterface";

// icons
import ArrowRightIcon from "../../assets/svg/ArrowRightIcon";
import ArrowUpIcon from "../../assets/svg/ArrowUpIcon";
import ArrowDownIcon from "../../assets/svg/ArrowDownIcon";

const Arrow: React.FC<ArrowProps> = ({ direction, onClick, disabled }) => {
  return (
    <span
      onClick={onClick}
      className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 ${
        disabled ? "fill-secondary300" : ""
      }`}
    >
      {direction === "left" && <ArrowRightIcon className="rotate-180" />}

      {direction === "right" && <ArrowRightIcon />}

      {direction === "up" && <ArrowUpIcon />}

      {direction === "down" && <ArrowDownIcon />}
    </span>
  );
};

export default Arrow;
