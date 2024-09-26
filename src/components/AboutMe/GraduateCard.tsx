import { motion } from "framer-motion";
import GraduateHat from "./icons/GraduateHat";

export default function GraduateCard() {
    return (
        <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "150px" }}
            className="bg-secondary-200 col-span-2 row-span-2 rounded-3xl flex flex-col items-center justify-center text-secondary-900"
        >
            <GraduateHat />
            <h5 className="font-semibold px-2">
                Bachelor of Electronics and ICT
            </h5>
            <h5 className="font-light px-2 pb-5">
                (Software Development major)
            </h5>
        </motion.div>
    );
}
