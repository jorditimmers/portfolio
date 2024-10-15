import { motion } from "framer-motion";
import GraduateHat from "./icons/GraduateHat";
import { WobbleCard } from "./wobble-card";

export default function GraduateCard() {
    return (
        <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "150px" }}
            className="col-span-2 row-span-2"
        >
            <WobbleCard
                containerClassName="bg-secondary-200 dark:bg-secondary-800 w-full h-full"
                className="flex flex-col items-center justify-center p-6"
            >
                <GraduateHat className="mb-4" />
                <h5 className="font-semibold text-xl text-center px-2">
                    Bachelor of Electronics and ICT
                </h5>
                <h5 className="font-light text-center px-2 pb-5">
                    (Software Development major)
                </h5>
            </WobbleCard>
        </motion.div>
    );
}
