import { FC } from "react";

export const FilterParamsIcon: FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // fill="currentColor"
    >
      <path
        d="M1.25 3.25H3.5M3.5 3.25C3.5 4.49264 4.50736 5.5 5.75 5.5C6.99264 5.5 8 4.49264 8 3.25C8 2.00736 6.99264 1 5.75 1C4.50736 1 3.5 2.00736 3.5 3.25ZM1.25 10.75H5.75M12.5 10.75H14.75M12.5 10.75C12.5 11.9926 11.4926 13 10.25 13C9.00736 13 8 11.9926 8 10.75C8 9.50736 9.00736 8.5 10.25 8.5C11.4926 8.5 12.5 9.50736 12.5 10.75ZM10.25 3.25H14.75"
        // stroke="#B2BCC6"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </svg>
  );
};

export default FilterParamsIcon;
