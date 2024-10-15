import { motion } from "framer-motion";
import { WobbleCard } from "./wobble-card";

export default function Bio() {
    const bioText =
        "I am a IT Consultant passionate about designing intuitive, visually engaging user interfaces. While I specialize in front-end development, I bring full-stack capabilities to deliver seamless solutions across the board.";

    return (
        <motion.div
            initial={{ x: "-70%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "-100px" }}
            className="col-span-2 md:col-span-3 row-span-2"
        >
            <WobbleCard
                containerClassName="bg-secondary-500 w-full h-full"
                className="p-6 md:p-8"
            >
                <p className="p-6 md:p-8 text-secondary-50 dark:text-secondary-950 text-2xl flex items-center justify-center text-center">
                    {bioText}
                </p>
            </WobbleCard>
        </motion.div>
    );
}
