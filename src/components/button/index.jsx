import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

 export const ButtonDefault = ({label, onclick}) => {

const { theme } = useContext(ThemeContext)

    return (
        <Button theme={theme} onClick={onclick} >{label}</Button>
    )
}

const Button = styled.button`
    width: 48%;
    height: 50px;
    border-radius: 10px;
    font-weight: 900;
    cursor: pointer;
    font-size: 16px;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.backgroundColor}; 
    
&:hover {
    background-color: transparent;
    color: ${props => props.theme.color};
    border: solid 2px;
    border-color: ${props => props.theme.color};
}
`