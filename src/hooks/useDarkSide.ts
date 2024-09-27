import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useDarkSide(): [
    string,
    Dispatch<SetStateAction<string>>,
    boolean
] {
    const [theme, setTheme] = useState<string>(() => {
        if (localStorage.getItem("theme")) {
            return localStorage.theme;
        } else {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }
    });

    const isDarkSide = theme === "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme, isDarkSide];
}
