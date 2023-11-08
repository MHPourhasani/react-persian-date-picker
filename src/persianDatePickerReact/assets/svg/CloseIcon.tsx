import React from "react";

interface Props {
  className?: string;
  onClick?: (a?: any) => any;
}

const CloseIcon = ({ className, onClick }: Props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M11 1L1 11M11 11L1 1"
        stroke="#ABABAB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
