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

        const metaThemeColor = document.querySelector(
            "meta[name='theme-color']"
        );
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                "content",
                isDarkSide ? "#0e0118" : "#F3E7FE"
            );
        }

        const metaIOSStatusBar = document.querySelector(
            "meta[name='apple-mobile-web-app-status-bar-style']"
        );
        if (metaIOSStatusBar) {
            metaIOSStatusBar.setAttribute(
                "content",
                isDarkSide ? "black-translucent" : "default"
            );
        }

        localStorage.setItem("theme", theme);
    }, [theme, isDarkSide]);

    return [theme, setTheme, isDarkSide];
}
