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

export default function AboutMe() {
    return (
        <div className="min-w-screen min-h-screen grid grid-cols-5 gap-6 p-24 overflow-hidden">
            <Bio />
            <Picture />
            <GraduateCard />
            <IconCard backgroundColor="secondary-400" render={<ReactLogo />} />
            <IconCard
                backgroundColor="background-900"
                render={<AngularLogo />}
            />
            <IconCard backgroundColor="secondary-400" render={<JavaLogo />} />
            <IconCard
                backgroundColor="background-900"
                render={<SpringLogo />}
            />
            <IconCard
                backgroundColor="secondary-400"
                render={<TailwindLogo />}
            />
            <IconCard backgroundColor="background-900" render={<AwsLogo />} />
        </div>
    );
}
