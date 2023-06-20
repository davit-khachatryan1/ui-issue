import React from "react";

export const DownloadIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5026 7.49999L17.5026 2.5M17.5026 2.5L12.5026 2.5M17.5026 2.5L8.33594 11.6667"
        stroke="#B2BCC6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16797H6.5C4.29086 4.16797 2.5 5.95883 2.5 8.16797V13.5013C2.5 15.7104 4.29086 17.5013 6.5 17.5013H11.8333C14.0425 17.5013 15.8333 15.7104 15.8333 13.5013V10.0013"
        stroke="#B2BCC6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
