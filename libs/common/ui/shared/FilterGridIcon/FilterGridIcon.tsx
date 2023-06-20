import { FC } from "react";

export const FilterGridIcon: FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // fill="currentColor"
      // stroke="currentColor"
    >
      <path
        d="M8.5 2.5C8.5 1.67157 9.17157 1 10 1H11.5C12.3284 1 13 1.67157 13 2.5V4C13 4.82843 12.3284 5.5 11.5 5.5H10C9.17157 5.5 8.5 4.82843 8.5 4V2.5Z"
        // stroke="#B2BCC6"
        stroke="currentColor"
        // fill="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M1 10C1 9.17157 1.67157 8.5 2.5 8.5H4C4.82843 8.5 5.5 9.17157 5.5 10V11.5C5.5 12.3284 4.82843 13 4 13H2.5C1.67157 13 1 12.3284 1 11.5V10Z"
        // stroke="#B2BCC6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M1 2.5C1 1.67157 1.67157 1 2.5 1H4C4.82843 1 5.5 1.67157 5.5 2.5V4C5.5 4.82843 4.82843 5.5 4 5.5H2.5C1.67157 5.5 1 4.82843 1 4V2.5Z"
        // stroke="#B2BCC6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 10C8.5 9.17157 9.17157 8.5 10 8.5H11.5C12.3284 8.5 13 9.17157 13 10V11.5C13 12.3284 12.3284 13 11.5 13H10C9.17157 13 8.5 12.3284 8.5 11.5V10Z"
        // stroke="#B2BCC6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default FilterGridIcon;
