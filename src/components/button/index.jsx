
import styled from "styled-components"

 export const ButtonDefault = ({label, onclick}) => {
    return (
        <Button onClick={onclick} >{label}</Button>
    )
}

const Button = styled.button`
    width: 48%;
    height: 50px;
    border-radius: 10px;
    font-weight: 900;
    cursor: pointer;
    font-size: 16px;
    background-color: #222;
    color: #fff;
    /* background-color: #fff;
    color: #222; */
&:hover {
    background-color: transparent;
    color: #222;
    border: #222 solid 2px;
    /* color: #fff;
    border: #fff solid 2px; */
}
`