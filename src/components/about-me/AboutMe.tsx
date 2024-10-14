import Bio from "./Bio";
import GraduateCard from "./GraduateCard";
import IconCard from "./IconCard";
import AngularLogo from "./icons/AngularLogo";
import AwsLogo from "./icons/AwsLogo";
import JavaLogo from "./icons/JavaLogo";
import ReactLogo from "./icons/ReactLogo";
import SpringLogo from "./icons/SpringLogo";
import TailwindLogo from "./icons/TailwindLogo";
import Picture from "./Picture";

const logoComponents = [
    <ReactLogo />,
    <AngularLogo />,
    <JavaLogo />,
    <SpringLogo />,
    <TailwindLogo />,
    <AwsLogo />,
];

interface AboutMeProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

export default function AboutMe({ sectionRef }: AboutMeProps) {
    return (
        <div
            className="min-w-full h-auto grid grid-cols-2 md:grid-cols-5 gap-6 p-6 pt-12 md:p-24 md:pt-12 overflow-hidden"
            ref={sectionRef}
        >
            <Bio />
            <Picture />
            <GraduateCard />
            {logoComponents.map((component, index) => (
                <IconCard key={index} render={component} />
            ))}
        </div>
    );
}
