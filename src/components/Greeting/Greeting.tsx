import { useState } from "react";
import TextAnim from "./TextAnim";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function Greeting() {
    const typingText =
        "Hi, i am Jordi Timmers!\n I create impactful applications.";

    const [animationActive, setAnimationActive] = useState<boolean>(true);

    const variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                bounce: 0.3,
            },
        },
    };

    return (
        <div className="min-w-max min-h-screen text-center flex flex-col justify-between">
            <div />
            <TextAnim
                text={typingText}
                setAnimationActive={setAnimationActive}
            />
            <motion.div
                className="flex flex-col justify-center items-center opacity-60"
                key="find-out-more"
                variants={variants}
                animate={animationActive ? "hidden" : "visable"}
            >
                <h4 className="font-light">FIND OUT MORE</h4>
                <IoIosArrowDown className="size-10 mb-3" />
            </motion.div>
        </div>
    );
}
