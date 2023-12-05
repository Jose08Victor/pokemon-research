import { BackShapes } from "../back-shapes"
import styled from "styled-components"

const Background = () => {
    return (
        <Div>
            <BackShapes />
        </Div>
    )
}

const Div = styled.div`
    background: #fff;
    // background: #222;
    position: fixed;
    width: 100vw;
    height: 100vh;
`
export { Background }