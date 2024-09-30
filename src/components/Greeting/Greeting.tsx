import { useState } from "react";
import TextAnim from "./TextAnim";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import DarkModeSwitch from "../General/DarkModeSwitch";
import GrainBackground from "./GrainBackground";

export default function Greeting() {
    const typingText =
        "Hi, i am Jordi Timmers!\n I create impactful applications.";

    const [animationActive, setAnimationActive] = useState<boolean>(true);

    const variants = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 -z-0 overflow-hidden opacity-50 flex items-center justify-center">
                <GrainBackground
                    width="80vw"
                    height="min(80vw, 80vh)"
                    viewBox="0 0 915 700"
                    className="blur-xl"
                />
            </div>

            <div className="min-w-max min-h-screen text-center flex flex-col justify-between overflow-hidden relative z-10">
                <DarkModeSwitch />
                <TextAnim
                    text={typingText}
                    setAnimationActive={setAnimationActive}
                />
                <motion.div
                    className="flex flex-col justify-center items-center opacity-60 text-text-950"
                    key="find-out-more"
                    variants={variants}
                    transition={{ type: "spring", stiffness: 100 }}
                    animate={animationActive ? "hidden" : "visible"}
                >
                    <h5 className="font-light">FIND OUT MORE</h5>
                    <IoIosArrowDown className="size-8 mb-3" />
                </motion.div>
            </div>
        </div>
    );
}
