import React from "react";

export const CreditCardIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      width="36"
      className={className}
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="36" height="36" fill="url(#pattern0cc)" />
      <defs>
        <pattern
          id="pattern0cc"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1235_23338"
            transform="translate(0 0.123552) scale(0.003861)"
          />
        </pattern>
        <image
          id="image0_1235_23338"
          width="259"
          height="195"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CreditCardIcon;
