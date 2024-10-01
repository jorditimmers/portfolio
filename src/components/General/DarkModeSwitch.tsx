import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
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
                <MoonIcon className="size-6 cursor-pointer text-text-900" />
            ) : (
                <SunIcon className="size-6 cursor-pointer text-text-900" />
            )}
        </div>
    );
}
