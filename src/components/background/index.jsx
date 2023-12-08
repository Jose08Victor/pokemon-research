import React, { useContext } from "react"
import { BackShapes } from "../back-shapes"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const Background = () => {

    const {theme} = useContext(ThemeContext)
    
    return (
        <Div theme={theme}>
            <BackShapes />
        </Div>
    )
}

const Div = styled.div`
    background: ${props => props.theme.secondary};
    position: fixed;
    width: 100vw;
    height: 100vh;
`
export { Background }