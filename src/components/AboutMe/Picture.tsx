import { motion } from "framer-motion";
import ProfilePicture from "./profilepicture.jpeg";

export default function Picture() {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ margin: "-100px" }}
            className="col-span-2 row-span-2"
        >
            <img
                className="object-cover w-full h-full rounded-3xl aspect-4/3"
                alt="Profile"
                src={ProfilePicture}
            />
        </motion.div>
    );
}
