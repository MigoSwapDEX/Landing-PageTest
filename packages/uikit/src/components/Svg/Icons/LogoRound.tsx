import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_3_41)">
        <g filter="url(#filter1_i_3_41)">
          <g clipPath="url(#clip0_3_41)">
            <g filter="url(#filter2_i_3_41)">
              <path
                d="M24 12.4286C24 19.056 18.6274 24.4286 12 24.4286C5.37258 24.4286 0 19.056 0 12.4286C0 5.80116 5.37258 0.428589 12 0.428589C18.6274 0.428589 24 5.80116 24 12.4286Z"
                fill="#2C9EF0"
              />
            </g>
            <g filter="url(#filter3_i_3_41)">
              <path
                d="M21.2091 12.4286C21.2091 17.3119 17.086 21.2707 11.9998 21.2707C6.91367 21.2707 2.79053 17.3119 2.79053 12.4286C2.79053 7.54519 6.91367 3.58646 11.9998 3.58646C17.086 3.58646 21.2091 7.54519 21.2091 12.4286Z"
                fill="#405AE2"
              />
            </g>
            <g filter="url(#filter4_d_3_41)">
              <path
                d="M17.8606 12.4286C17.8606 15.5679 15.2368 18.1128 12.0001 18.1128C8.76346 18.1128 6.13965 15.5679 6.13965 12.4286C6.13965 9.28924 8.76346 6.74435 12.0001 6.74435C15.2368 6.74435 17.8606 9.28924 17.8606 12.4286Z"
                fill="#877DF3"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_3_41"
          x="-4"
          y="-3.57141"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3_41" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3_41" result="shape" />
        </filter>
        <filter
          id="filter1_i_3_41"
          x="0"
          y="0.428589"
          width="24"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_41" />
        </filter>
        <filter
          id="filter2_i_3_41"
          x="0"
          y="0.428589"
          width="24"
          height="116.216"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="92.2162" />
          <feGaussianBlur stdDeviation="46.1081" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_41" />
        </filter>
        <filter
          id="filter3_i_3_41"
          x="2.79053"
          y="3.58646"
          width="18.4185"
          height="109.9"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="92.2162" />
          <feGaussianBlur stdDeviation="46.1081" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_41" />
        </filter>
        <filter
          id="filter4_d_3_41"
          x="-86.0766"
          y="6.74435"
          width="196.153"
          height="195.801"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="92.2162" />
          <feGaussianBlur stdDeviation="46.1081" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_41" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_41" result="shape" />
        </filter>
        <clipPath id="clip0_3_41">
          <rect width="24" height="24" fill="white" transform="translate(0 0.428589)" />
        </clipPath>
      </defs>
    </svg>
    // <Svg viewBox="0 0 96 96" {...props}>
    //   <circle cx={48} cy={48} r={48} fill="#53DEE9" />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z"
    //     fill="#633001"
    //   />
    //   <path
    //     d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z"
    //     fill="#D1884F"
    //   />
    //   <path
    //     d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z"
    //     fill="#FEDC90"
    //   />
    //   <path
    //     d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z"
    //     fill="#633001"
    //   />
    //   <defs>
    //     <linearGradient id="paint0_linear_10493" x1={48} y1={0} x2={48} y2={96} gradientUnits="userSpaceOnUse">
    //       <stop stopColor="#53DEE9" />
    //       <stop offset={1} stopColor="#2C9EF0" />
    //     </linearGradient>
    //   </defs>
    // </Svg>
  );
};

export default Icon;
