import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./CursorBlinker";

interface TextAnimProps {
    text: string;
}

export default function TextAnim({ text }: TextAnimProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        text.slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 2,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    return (
        <span className="text-6xl font-bold">
            <motion.span>{displayText}</motion.span>
            <CursorBlinker />
        </span>
    );
}
