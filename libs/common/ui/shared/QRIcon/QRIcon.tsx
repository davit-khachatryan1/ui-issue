import React from "react";

export const QRIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="34" height="34" fill="url(#pattern0qr)" />
      <defs>
        <pattern
          id="pattern0qr"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1235_23347" transform="scale(0.00444444)" />
        </pattern>
        <image
          id="image0_1235_23347"
          width="225"
          height="225"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default QRIcon;
