import React from "react";

export const EthIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1235_23081)">
        <path
          d="M18.0942 36.2782C27.9129 36.2782 35.872 28.3187 35.872 18.5004C35.872 8.68221 27.9129 0.722656 18.0942 0.722656C8.27596 0.722656 0.316406 8.68221 0.316406 18.5004C0.316406 28.3187 8.27596 36.2782 18.0942 36.2782Z"
          fill="#627EEA"
        />
        <path
          d="M18.0938 5.16797V15.0235L26.424 18.7457L18.0938 5.16797Z"
          fill="white"
          fillOpacity="0.602"
        />
        <path
          d="M18.0733 5.16797L9.74219 18.7457L18.0733 15.0235V5.16797Z"
          fill="white"
        />
        <path
          d="M18.0938 25.5582V32.2551L26.4297 20.7227L18.0938 25.5582Z"
          fill="white"
          fillOpacity="0.602"
        />
        <path
          d="M18.0733 32.2551V25.5573L9.74219 20.7227L18.0733 32.2551Z"
          fill="white"
        />
        <path
          d="M18.0938 23.4377L26.424 18.6009L18.0938 14.8809V23.4377Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M9.74219 18.6004L18.0733 23.4373V14.8809L9.74219 18.6009V18.6004Z"
          fill="white"
          fillOpacity="0.602"
        />
      </g>
      <defs>
        <clipPath id="clip0_1235_23081">
          <rect
            width="36"
            height="35.5556"
            fill="white"
            transform="translate(0 0.722656)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EthIcon;
