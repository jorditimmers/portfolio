import AboutMe from "../components/AboutMe/AboutMe";
import FloatingContact from "../components/General/FloatingContactContainer";
import Greeting from "../components/Greeting/Greeting";
import Timeline from "../components/Timeline/HistoryTimeLine";

export default function MainPage() {
    return (
        <div className="min-h-screen min-w-fit bg-background-50">
            {/* Desktop Content */}
            <div className="hidden md:block">
                <Greeting />
                <AboutMe />
                <Timeline />
                <FloatingContact />
            </div>

            {/* Mobile Message */}
            <div className="flex md:hidden flex-col justify-center items-center text-center h-screen p-6">
                <p className="text-lg md:text-xl font-bold text-white">
                    Please switch to a desktop device for the best experience.
                </p>
            </div>
        </div>
    );
}
