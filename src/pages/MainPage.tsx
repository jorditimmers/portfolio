import AboutMe from "../components/about-me/AboutMe";
import Footer from "../components/footer/Footer";
import ContactInfo from "../components/general/ContactInfo";
import FloatingContact from "../components/general/FloatingContactContainer";
import Greeting from "../components/greeting/Greeting";
import Timeline from "../components/timeline/HistoryTimeLine";

export default function MainPage() {
    return (
        <div className="min-h-screen min-w-fit bg-background-50">
            <div className="md:block">
                <Greeting />
                <AboutMe />
                <Timeline />
                <ContactInfo />
                <Footer />

                {/* This is hidden on mobile */}
                <FloatingContact />
            </div>
        </div>
    );
}
