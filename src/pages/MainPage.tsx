import AboutMe from "../components/AboutMe/AboutMe";
import FloatingContact from "../components/General/FloatingContactContainter";
import Greeting from "../components/Greeting/Greeting";
import Timeline from "../components/Timeline/HistoryTimeLine";

export default function MainPage() {
    return (
        <div className="min-h-screen min-w-fit bg-background-50">
            <Greeting />

            <AboutMe />

            <Timeline />

            <FloatingContact />
        </div>
    );
}
