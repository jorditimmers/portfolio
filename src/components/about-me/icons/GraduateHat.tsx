import * as React from "react";
const GraduateHat = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={160}
        height={160}
        viewBox="0 0 140 140"
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#663597"
                d="M140 55.232v-3.449L69.956 18.11 0 51.74v3.534l69.956 33.632L140 55.232Z"
            />
            <path
                fill="#4C2871"
                d="M24.977 74.993v20.09l42.865 20.318h7.228l42.697-20.238c.058-.128.113-.256.168-.385v-20.785l-46.979 22.782-46.979-22.782Z"
            />
            <path
                fill="#7F42BD"
                d="M131.358 104.493V64.902l-5.991 2.03v36.561l-3.207 10.862 5.87 7.535h1.664l5.87-7.535-3.206-10.862Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h140v140H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default GraduateHat;
