import { motion } from "framer-motion";

interface ContactButtonProps {
    url?: string;
    render?: React.ReactNode;
}

export default function ContactButton({ url, render }: ContactButtonProps) {
    const handleClick = () => {
        if (url) window.open(url, "_blank");
    };

    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 200 },
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
                y: -10,
            }}
            onClick={handleClick}
            className="p-5 m-3 rounded-full bg-secondary-400 shadow-sm hover:bg-secondary-500"
        >
            {render}
        </motion.button>
    );
}
