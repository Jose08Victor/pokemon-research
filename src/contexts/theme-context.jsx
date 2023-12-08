import { createContext, useState } from "react";

export const themes = {
    light: {
        primary: '#222',
        secondary: '#fff'

    },
    dark: {
        primary: '#fff',
        secondary: '#222'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (Props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {Props.children}
        </ThemeContext.Provider>
    )
}