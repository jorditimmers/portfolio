import { motion } from "framer-motion";

export default function Bio() {
    const bioText =
        "I am a IT Consultant passionate about designing intuitive, visually engaging user interfaces. While I specialize in front-end development, I bring full-stack capabilities to deliver seamless solutions across the board.";

    return (
        <motion.div
            initial={{ x: "-90%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "-100px" }}
            className="bg-secondary-500 col-span-3 row-span-2 rounded-3xl flex items-center justify-center text-center shadow-md"
        >
            <p className="p-8 text-secondary-50 dark:text-secondary-950 text-2xl">
                {bioText}
            </p>
        </motion.div>
    );
}
