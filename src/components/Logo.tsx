import React from "react";

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 500 175"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Inter:wght@400;500;600&display=swap');`}
      </style>
    </defs>
    {/* "Calm" italic serif wordmark */}
    <text
      x="46"
      y="92"
      fontFamily="'Cormorant Garamond', 'Georgia', serif"
      fontSize="96"
      fontWeight="500"
      fontStyle="italic"
      fill="#2A2A2A"
    >
      Calm
    </text>
    {/* Vertical hairline separator */}
    <line
      x1="272"
      y1="38"
      x2="272"
      y2="100"
      stroke="#C4BDB3"
      strokeWidth="2.0"
    />
    {/* "TAX" sans label */}
    <text
      x="288"
      y="65"
      fontFamily="'Inter', 'Helvetica Neue', sans-serif"
      fontSize="20"
      fontWeight="500"
      letterSpacing="6"
      fill="#9A9590"
    >
      TAX
    </text>
    {/* "CO." sans label */}
    <text
      x="288"
      y="92"
      fontFamily="'Inter', 'Helvetica Neue', sans-serif"
      fontSize="20"
      fontWeight="500"
      letterSpacing="6"
      fill="#9A9590"
    >
      CO.
    </text>
    {/* wave curve */}
    <path
      d="m 18.361809,116.41876 q 94.000001,-12 196.000001,0 102,12 174,0"
      stroke="#9a9590"
      strokeWidth="2.8"
      fill="none"
      strokeLinecap="round"
      style={{
        strokeWidth: 2.19968504,
        strokeMiterlimit: 4,
        strokeDasharray: "none",
      }}
    />
  </svg>
);
