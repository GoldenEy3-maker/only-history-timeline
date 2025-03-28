import React from "react";

export const Icons = {
  ArrowLeft: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
};
