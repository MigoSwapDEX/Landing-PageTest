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
    //   <circle cx="48" cy="48" r="48" fill="#F0B90B" />
    //   <path
    //     d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
    //     fill="white"
    //   />
    // </Svg>
  );
};

export default Icon;
