import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useDarkSide from "../../hooks/useDarkSide";

export default function Switcher() {
    const [theme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(theme === "dark");

    useEffect(() => {
        setDarkSide(theme === "dark");
    }, [theme]);

    const toggleDarkMode = () => {
        setTheme(darkSide ? "light" : "dark");
    };

    return (
        <div
            className="pt-6 flex items-center justify-center"
            onClick={toggleDarkMode}
        >
            {darkSide ? (
                <MdDarkMode className="size-6 cursor-pointer fill-text-900" />
            ) : (
                <MdLightMode className="size-6 cursor-pointer fill-text-900" />
            )}
        </div>
    );
}
