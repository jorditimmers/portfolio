import { useRef } from "react";
import AboutMe from "../components/about-me/AboutMe";
import Footer from "../components/footer/Footer";
import ContactInfo from "../components/general/ContactInfo";
import FloatingContact from "../components/general/FloatingContactContainer";
import Greeting from "../components/greeting/Greeting";
import Timeline from "../components/timeline/HistoryTimeLine";

export default function MainPage() {
    const aboutMeSectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        aboutMeSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-background-50">
            <Greeting onScrollClick={handleScroll} />
            <AboutMe sectionRef={aboutMeSectionRef} />
            <Timeline />
            <ContactInfo />
            <Footer />

            {/* This is hidden on mobile */}
            <FloatingContact />
        </div>
    );
}
