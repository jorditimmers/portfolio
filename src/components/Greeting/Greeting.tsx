import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import DarkModeSwitch from "../general/DarkModeSwitch";
import GrainBackground from "./GrainBackground";
import TextAnim from "./TextAnim";

export default function Greeting() {
    const typingText =
        "Hi, I am Jordi Timmers!\n I create elegant applications.";

    const [animationActive, setAnimationActive] = useState<boolean>(true);

    const variants = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 -z-0 overflow-hidden opacity-50 flex items-center justify-center"
            >
                <GrainBackground
                    width="80vw"
                    height="min(80vw, 80vh)"
                    viewBox="0 0 915 700"
                    className="blur-xl"
                />
            </motion.div>

            <div className="flex-grow flex flex-col items-center justify-center relative z-10 text-center px-6">
                <DarkModeSwitch />
                <TextAnim
                    text={typingText}
                    setAnimationActive={setAnimationActive}
                />
            </div>

            <div className="flex flex-col justify-center items-center opacity-60 text-text-950 pb-20 md:pb-4">
                <motion.div
                    key="find-out-more"
                    variants={variants}
                    transition={{ type: "spring", stiffness: 100 }}
                    animate={animationActive ? "hidden" : "visible"}
                    className="flex flex-col items-center"
                >
                    <h5 className="font-light text-lg md:text-xl lg:text-2xl">
                        FIND OUT MORE
                    </h5>
                    <IoIosArrowDown className="size-8 mb-3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                </motion.div>
            </div>
        </div>
    );
}
