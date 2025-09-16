import * as React from "react";
const GrainBackground = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={915}
        height={681}
        viewBox="0 0 915 681"
        fill="none"
        {...props}
    >
        <ellipse
            cx={263.854}
            cy={210.892}
            fill="url(#a)"
            rx={234}
            ry={164.5}
            transform="rotate(12.394 263.854 210.892)"
        />
        <circle cx={638} cy={404} r={277} fill="url(#b)" />
        <ellipse cx={300} cy={382} fill="url(#c)" rx={109} ry={100} />
        <defs>
            <linearGradient
                id="a"
                x1={263.854}
                x2={263.854}
                y1={46.392}
                y2={375.392}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#7F42BD" />
                <stop offset={1} stopColor="#B28ED7" />
            </linearGradient>
            <linearGradient
                id="b"
                x1={638}
                x2={638}
                y1={127}
                y2={681}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#CCB4E4" />
                <stop offset={1} stopColor="#7F42BD" />
            </linearGradient>
            <linearGradient
                id="c"
                x1={300}
                x2={300}
                y1={282}
                y2={482}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#B28ED7" />
                <stop offset={1} stopColor="#7F42BD" />
            </linearGradient>
        </defs>
    </svg>
);
export default GrainBackground;
