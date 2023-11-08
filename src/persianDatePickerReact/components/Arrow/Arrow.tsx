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
			className={`flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 ${
				disabled ? "fill-secondary300" : ""
			}`}
		>
			{direction === "left" && <ArrowRightIcon className="rotate-180 h-4 w-4" />}

			{direction === "right" && <ArrowRightIcon className="h-4 w-4" />}

			{direction === "up" && <ArrowUpIcon className="h-6 w-6" />}

			{direction === "down" && <ArrowDownIcon className="h-6 w-6" />}
		</span>
	);
};

export default Arrow;
