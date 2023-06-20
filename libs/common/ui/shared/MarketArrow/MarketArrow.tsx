import { FC } from "react";

export const MarketArrow: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66406 8.83333L9.9974 5.5M9.9974 5.5L13.3307 8.83333M9.9974 5.5V15.5"
        stroke="#08DDC3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MarketArrow;
