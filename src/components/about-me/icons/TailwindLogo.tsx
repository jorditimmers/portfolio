import * as React from "react";
const TailwindLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={90}
        height={90}
        fill="none"
        viewBox="0 0 131 131"
        {...props}
    >
        <g filter="url(#a)">
            <path
                fill="#F4FB6A"
                d="M36.844 56.084C40.664 40.801 50.217 33.16 65.5 33.16c22.925 0 25.79 17.194 37.253 20.06 7.642 1.91 14.328-.956 20.059-8.597-3.82 15.283-13.372 22.925-28.656 22.925-22.925 0-25.79-17.194-37.253-20.06-7.642-1.91-14.328.956-20.06 8.597ZM8.187 90.472c3.821-15.283 13.373-22.925 28.657-22.925 22.925 0 25.79 17.194 37.253 20.06 7.642 1.91 14.328-.956 20.06-8.598-3.822 15.284-13.374 22.925-28.657 22.925-22.925 0-25.79-17.193-37.253-20.059-7.642-1.91-14.328.955-20.06 8.597Z"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={139}
                height={139}
                x={-4}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_5_64"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5_64"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
export default TailwindLogo;
