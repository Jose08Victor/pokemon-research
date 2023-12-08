import { createGlobalStyle } from "styled-components";
import React, { useContext } from "react"
import { ThemeContext } from './contexts/theme-context';

const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)

    return <Reset theme={theme} />

}
const Reset = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Tourney', sans-serif;
    color: ${props => props.theme.primary};
    font-weight: 700;
}

a {
    text-decoration: none;
}

ul {
	list-style: none;
}
`

export { GlobalStyle }