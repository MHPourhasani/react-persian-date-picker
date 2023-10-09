import React from "react";

interface Props {
  className?: string;
  onClick?: (a?: any) => any;
}

const ArrowUpIcon = ({ className, onClick }: Props) => {
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
        d="M16.92 8.09009L10.4 1.57009C9.63002 0.800086 8.37002 0.800086 7.60002 1.57009L1.08002 8.09009"
        stroke="#351EEF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
