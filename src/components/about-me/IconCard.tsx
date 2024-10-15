import { motion } from "framer-motion";
import { WobbleCard } from "./wobble-card";

interface IconCardProps {
    backgroundColor?: string;
    render?: React.ReactNode;
}

export default function IconCard({ render, backgroundColor }: IconCardProps) {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "100px" }}
            className={`col-span-1 row-span-1`}
        >
            <WobbleCard
                containerClassName="col-span-1 row-span-1 bg-secondary-500 dark:bg-secondary-400 h-full w-full"
                className="flex items-center justify-center p-8 md:p-10 lg:p-12"
            >
                {render}
            </WobbleCard>
        </motion.div>
    );
}
