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

export default function AboutMe() {
    return (
        <div className="min-w-full h-auto grid grid-cols-2 md:grid-cols-5 gap-6 p-6 md:p-24 overflow-hidden">
            <Bio />
            <Picture />
            <GraduateCard />
            {logoComponents.map((component, index) => (
                <IconCard key={index} render={component} />
            ))}
        </div>
    );
}
