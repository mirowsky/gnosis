import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export interface BlobProps extends SvgIconProps {}

export const Blob = (props: BlobProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M547.211 362.156C479.371 433.424 390.001 477.645 318.189 490.834C244.247 504.106 188.244 486.886 134.802 437.558C82.7065 387.701 52.2319 322.023 28.5884 254.732C6.93487 187.6 -7.76638 119.246 4.48828 65.5237C17.0235 11.3156 68.3292 -5.42872 130.608 2.11728C194.111 8.74384 268.726 39.4175 352.896 61.9528C434.477 86.5702 520.388 104.284 565.474 157.267C611.338 206.496 616.116 290.847 547.211 362.156Z"
        fill="url(#paint0_linear_302_27)"
        fillOpacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_302_27"
          x1="-13.9312"
          y1="89.6424"
          x2="305.569"
          y2="541.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#57B8FF" />
          <stop offset="0.955972" stopColor="#1D3DEA" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default Blob;
