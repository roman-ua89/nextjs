'use client'

import {createContext, useState} from "react";

type ThemeMode = 'light' | 'dark';

export interface IThemeContext {
    theme: ThemeMode;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
/*
* Your Server Component will now be able to directly render your provider,
* and all other Client Components throughout your app will be able to consume this context.
* */
export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<ThemeMode>('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? "dark" : 'light')
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}