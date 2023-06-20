import { FC } from "react";

export const FilterListIcon: FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // fill="currentColor"
    >
      <path
        d="M7.5 1.5H12M7.5 7.5H12M7.5 4.5H16.5M7.5 10.5H16.5M2.25 4.5H3.75C4.16421 4.5 4.5 4.16421 4.5 3.75V2.25C4.5 1.83579 4.16421 1.5 3.75 1.5H2.25C1.83579 1.5 1.5 1.83579 1.5 2.25V3.75C1.5 4.16421 1.83579 4.5 2.25 4.5ZM2.25 10.5H3.75C4.16421 10.5 4.5 10.1642 4.5 9.75V8.25C4.5 7.83579 4.16421 7.5 3.75 7.5H2.25C1.83579 7.5 1.5 7.83579 1.5 8.25V9.75C1.5 10.1642 1.83579 10.5 2.25 10.5Z"
        // stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        // fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
};

export default FilterListIcon;
