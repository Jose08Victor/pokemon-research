import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#222',
        backgroundColor: '#fff'

    },
    dark: {
        color: '#fff',
        backgroundColor: '#222'
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