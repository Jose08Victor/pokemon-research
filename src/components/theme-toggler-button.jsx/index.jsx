import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import styled from "styled-components"
import blackPokeball from "../../assets/black-pokeball.svg"
import whitePokeball from "../../assets/white-pokeball.svg"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Input type="checkbox" id="dark-mode"/>

            <Label htmlFor="dark-mode" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}></Label>

            <P>{theme === themes.light ? 'Mode: Light' : 'Mode: Dark'}</P>
        </>
    )
}

const Label = styled.label`
    position: relative;
    width: 80px;
    height: 35px;
    display: block;
    background-color: transparent;
    border-radius: 100px;
    cursor: pointer;
    top: 30px;
    left: 30px;
    border: #222 3px solid;
    transition: 0.5s;
    z-index: 1; 
    
    &:hover {
        background-color: hsla(0, 1%, 57%, 0.4);
    }
    
    &:after {
    content: '';
    position: absolute;
    height: 25px;
    width: 25px;
    background: url(${whitePokeball}) no-repeat center;
    background-size: cover;
    background-color: #222;
    border-radius: 100px;
    top: 2.4px;
    left: 3px;
    transition: 0.5s;
    }

    @media (max-width: 768px) {
        top: 20px;
    left: 20px;
        width: 45px;
        height: 20px;

        &:after{
            height: 12.5px;
            width: 12.5px;
            top: .7px;
            left: 1.4px;
        }
    }
` 

const Input = styled.input`
    display: none;
    
    &:checked ~ label{
        border: #eee 3px solid;
    }

    &:checked ~ label:after{
    left: 46px;
    transform: rotate(180deg);
    background: url(${blackPokeball}) no-repeat center;
    background-size: cover;
    background-color: #fff;
    }

    @media (max-width: 768px) {
        &:checked ~ label:after{
            left: 24.5px; 
        }
    }
`

const P = styled.p`
    position: absolute;
    top: 70px;
    left: 33px;
    font-weight: 900;
    font-size: 12.5px;
    cursor: default;

    @media (max-width: 768px) {
        top: 45px;
        left: 17px;
        font-size: 9px;
    }
`