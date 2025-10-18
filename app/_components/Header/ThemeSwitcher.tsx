'use client';

import {useTheme} from "@/app/_hooks/useTheme";

export const ThemeSwitcher = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className="absolute right-3 top-3">
            Theme: <button onClick={() => toggleTheme()} className=" text-blue-400 underline cursor-pointer">{theme}</button>
        </div>
    )
}