import AboutMe from "../components/about-me/AboutMe";
import FloatingContact from "../components/general/FloatingContactContainer";
import Greeting from "../components/greeting/Greeting";
import Timeline from "../components/timeline/HistoryTimeLine";

export default function MainPage() {
    return (
        <div className="min-h-screen min-w-fit bg-background-50">
            <div className="hidden md:block">
                <Greeting />
                <AboutMe />

                <Timeline />
                <FloatingContact />
            </div>

            <div className="flex md:hidden flex-col justify-center items-center text-center h-screen p-6">
                <p className="text-lg md:text-xl font-bold text-white">
                    Please switch to a desktop device for the best experience.
                </p>
            </div>
        </div>
    );
}
