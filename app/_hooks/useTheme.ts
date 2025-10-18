'use client';

import {IThemeContext, ThemeContext} from "@/app/_components/ThemeProvider";
import {useContext} from "react";

export const useTheme = (): IThemeContext => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Hood should be called within Theme Provider')
    }

    return context;
}