import { motion } from "framer-motion";
import ProfilePicture from "./profilepicture.jpeg";
import { WobbleCard } from "./wobble-card";

export default function Picture() {
    return (
        <motion.div
            initial={{ x: "70%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "-100px" }}
            className="col-span-2 row-span-2"
        >
            <WobbleCard containerClassName="w-full h-full">
                <img
                    className="object-cover w-full h-full aspect-4/3 scale-105"
                    alt="Profile"
                    src={ProfilePicture}
                />
            </WobbleCard>
        </motion.div>
    );
}
