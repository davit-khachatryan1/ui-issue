import { FC } from "react";

export const SliderArrow: FC<{ className?: string; onClick: () => void }> = ({
  className,
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.168 13.416L26.8346 22.9993L19.168 32.5827"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SliderArrow;
