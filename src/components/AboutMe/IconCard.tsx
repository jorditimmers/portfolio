import { motion } from "framer-motion";

interface IconCardProps {
    backgroundColor?: string;
    darkModeBackgroundColorFull?: string;
    render?: React.ReactNode;
}

export default function IconCard({
    render,
    backgroundColor,
    darkModeBackgroundColorFull,
}: IconCardProps) {
    return (
        <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "100px" }}
            className={`bg-${
                backgroundColor ? backgroundColor : "background-200"
            } ${darkModeBackgroundColorFull} rounded-3xl flex items-center justify-center p-8`}
        >
            {render}
        </motion.div>
    );
}
