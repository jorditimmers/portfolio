import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import CursorBlinker from "./CursorBlinker";

interface TextAnimProps {
    text: string;
    setAnimationActive?: (active: boolean) => void;
}

export default function TextAnim({ text, setAnimationActive }: TextAnimProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayText, setDisplayText] = useState<React.ReactNode>(
        text.slice(0, 0)
    );

    const handleAnimationEnd = useCallback(() => {
        if (setAnimationActive) setAnimationActive(false);
        console.log("Animation ended");
    }, [setAnimationActive]);

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 6,
            ease: "easeInOut",
            onComplete: handleAnimationEnd,
        });

        rounded.on("change", (latest) => {
            const slicedText = text.slice(0, latest);
            setDisplayText(
                slicedText.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        {index < slicedText.split("\n").length - 1 && <br />}
                    </span>
                ))
            );
        });

        return controls.stop;
    }, [text, count, rounded, handleAnimationEnd]);

    return (
        <span className="text-6xl font-bold space-y-6 min-h-64 flex items-center justify-center text-text-900">
            <motion.span>
                {displayText}
                <CursorBlinker />
            </motion.span>
        </span>
    );
}
