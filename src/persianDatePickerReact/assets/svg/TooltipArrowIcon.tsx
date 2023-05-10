import React from "react";

interface Props {
  className?: string;
  onClick?: (a?: any) => any;
}

const TooltipArrowIcon = ({ className, onClick }: Props) => {
  return (
    <svg
      width="27"
      height="20"
      viewBox="0 0 27 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <g filter="url(#filter0_d_5_2041)">
        <path d="M23 19.4365L4.00002 19.4365C5.09409 18.6343 4.90313 19.4365 7.81005 15.8525C9.61993 13.621 11.2022 9.7611 11.367 9.30671C11.8262 8.48762 12.6341 7.99995 13.536 7.99995C14.4441 7.99995 15.2569 8.49424 15.7144 9.32345C15.8672 9.66917 17.4571 13.5927 19.2379 15.8197C22.1301 19.4365 22.2033 18.6382 23 19.4365Z" />
      </g>
      <defs>
        <filter
          id="filter0_d_5_2041"
          x="0"
          y="0"
          width="27"
          height="19.4365"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5_2041"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5_2041"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TooltipArrowIcon;
