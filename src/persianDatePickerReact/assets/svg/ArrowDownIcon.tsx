import React from "react";

interface Props {
  className?: string;
  onClick?: (a?: any) => any;
}

const ArrowDownIcon = ({ className, onClick }: Props) => {
  return (
    <svg
      width="18"
      height="9"
      fill="none"
      viewBox="0 0 18 9"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M1.07998 0.909912L7.59998 7.42991C8.36998 8.19991 9.62998 8.19991 10.4 7.42991L16.92 0.909912"
        stroke="#351EEF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
