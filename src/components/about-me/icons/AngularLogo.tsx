import * as React from "react";
const AngularLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 104 110"
        fill="none"
        {...props}
    >
        <path
            fill="#7F42BD"
            fillRule="evenodd"
            d="M0 18.13 50.843 0l52.183 17.815-8.434 67.239-43.749 24.199-43.04-23.884L0 18.13Z"
            clipRule="evenodd"
        />
        <path
            fill="#9968CA"
            fillRule="evenodd"
            d="M103.026 17.815 50.843 0v109.253l43.749-24.2 8.434-67.238Z"
            clipRule="evenodd"
        />
        <path
            fill="#EDF906"
            fillRule="evenodd"
            d="M50.922 12.77 19.234 83.24l11.824-.236 6.385-15.923H65.74l6.937 16.08 11.272.237L50.922 12.77ZM51 35.393 61.72 57.78h-20.1L51 35.393Z"
            clipRule="evenodd"
        />
    </svg>
);
export default AngularLogo;
