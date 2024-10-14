import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import CursorBlinker from "./CursorBlinker";

interface TextAnimProps {
    text: string;
    setAnimationActive?: (active: boolean) => void;
    duration?: number;
    hasMinHeight?: boolean;
}

export default function TextAnim({
    text,
    setAnimationActive,
    duration,
    hasMinHeight,
}: TextAnimProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayText, setDisplayText] = useState<React.ReactNode>(
        text.slice(0, 0)
    );
    const [hasAnimated, setHasAnimated] = useState(false);
    const textRef = useRef<HTMLSpanElement>(null);

    const handleAnimationEnd = useCallback(() => {
        if (setAnimationActive) setAnimationActive(false);
        console.log("Animation ended");
    }, [setAnimationActive]);

    useEffect(() => {
        let observer: IntersectionObserver;

        const startAnimation = () => {
            if (!hasAnimated) {
                const controls = animate(count, text.length, {
                    type: "tween",
                    duration: duration || 6,
                    ease: "easeInOut",
                    onComplete: handleAnimationEnd,
                });

                rounded.on("change", (latest) => {
                    const slicedText = text.slice(0, latest);
                    setDisplayText(
                        slicedText.split("\n").map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < slicedText.split("\n").length - 1 && (
                                    <br />
                                )}
                            </span>
                        ))
                    );
                });

                setHasAnimated(true);

                return controls.stop;
            }
        };

        if (textRef.current) {
            observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        startAnimation();
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(textRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [text, count, rounded, handleAnimationEnd, hasAnimated]);

    return (
        <span
            className={`${
                hasMinHeight === true ? "min-h-40" : ""
            } text-3xl md:text-6xl font-bold space-y-6 flex items-center justify-center text-text-900 my-8`}
            ref={textRef}
        >
            <motion.span>
                {displayText}
                <CursorBlinker />
            </motion.span>
        </span>
    );
}
