import { motion } from "framer-motion";

interface IconCardProps {
    backgroundColor?: string;
    render?: React.ReactNode;
}

export default function IconCard({ render, backgroundColor }: IconCardProps) {
    return (
        <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "100px" }}
            className={`bg-${
                backgroundColor ? backgroundColor : "secondary-300"
            } dark:bg-secondary-400 rounded-3xl flex items-center justify-center p-8 md:p-10 lg:p-12 shadow-md`}
        >
            {render}
        </motion.div>
    );
}
