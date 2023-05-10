import React from "react";

interface Props {
  className?: string;
  onClick?: (a?: any) => any;
}

const ArrowRightIcon = ({ className, onClick }: Props) => {
  return (
    <svg
      width="7"
      height="13"
      fill="none"
      viewBox="0 0 7 13"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M0.940002 11.7165L5.28667 7.36983C5.8 6.85649 5.8 6.01649 5.28667 5.50316L0.940002 1.15649"
        stroke="#4E4B66"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
