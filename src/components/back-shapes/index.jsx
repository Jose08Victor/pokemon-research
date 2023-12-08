import styled, { keyframes } from "styled-components"
import bulbasaur from "../../assets/bulbasaur.png"
import charmander from "../../assets/charmander.png"
import squirtle from "../../assets/squirtle.png"
import pikachu from "../../assets/pikachu.png"

const BackShapes = () => {
    return (
        <>
            <Bulbasaur style={{ animationDelay: "-0.91s", top: "66%", left: "13%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-4.10s", top: "15%", left: "32%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-3.65s", top: "13%", left: "45%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-3.35s", top: "88%", left: "60%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-2.35s", top: "39%", left: "10%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-2.73s", top: "1%", left: "2%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-3.62s", top: "89%", left: "88%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-1.40s", top: "19%", left: "21%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-3.21s", top: "41%", left: "32%" }}></Bulbasaur>
            <Bulbasaur style={{ animationDelay: "-0.79s", top: "29%", left: "78%" }}></Bulbasaur>

            <Charmander style={{ animationDelay: "-2.80s", top: "21%", left: "14%" }}></Charmander>
            <Charmander style={{ animationDelay: "-2.15s", top: "58%", left: "56%" }}></Charmander>
            <Charmander style={{ animatioDdelay: "-1.90s", top: "8%", left: "72%" }}></Charmander>
            <Charmander style={{ animationDelay: "-4.45s", top: "28%", left: "25%" }}></Charmander>
            <Charmander style={{ animationDelay: "-2.10s", top: "23%", left: "63%" }}></Charmander>
            <Charmander style={{ animationDelay: "-1.75s", top: "81%", left: "45%" }}></Charmander>
            <Charmander style={{ animationDelay: "-1.45s", top: "60%", left: "42%" }}></Charmander>
            <Charmander style={{ animationDelay: "-1.05s", top: "29%", left: "92%" }}></Charmander>
            <Charmander style={{ animationDelay: "-0.35s", top: "81%", left: "83%" }}></Charmander>
            <Charmander style={{ animationDelay: "-0.10s", top: "86%", left: "11%" }}></Charmander>

            <Squirtle style={{ animationDelay: "-4.80s", top: "31%", left: "33%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-2.30s", top: "77%", left: "24%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-1.75s", top: "2%", left: "47%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-1.25s", top: "71%", left: "66%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-0.65s", top: "34%", left: "74%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-1.42s", top: "3%", left: "89%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-1.27s", top: "26%", left: "3%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-2.69s", top: "68%", left: "91%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-3.15s", top: "39%", left: "60%" }}></Squirtle>
            <Squirtle style={{ animationDelay: "-0.73s", top: "46%", left: "38%" }}></Squirtle>

            <Pikachu style={{ animationDelay: "-4.10s", top: "76%", left: "38%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-0.65s", top: "31%", left: "58%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-0.41s", top: "69%", left: "81%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-2.25s", top: "55%", left: "27%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-2.03s", top: "49%", left: "53%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-0.95s", top: "33%", left: "86%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-4.37s", top: "2%", left: "19%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-4.05s", top: "21%", left: "6%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-3.75s", top: "77%", left: "4%" }}></Pikachu>
            <Pikachu style={{ animationDelay: "-3.39s", top: "0%", left: "71%" }}></Pikachu>
        </>
    )
}

const floating = keyframes`
0% {
    transform: translateY(0%) rotate(-55deg);
}

50% {
    transform: translateY(300%) rotate(55deg);
}

100% {
    transform: translateY(0%) rotate(-55deg);
}
`
const Span = styled.span`
    display: inline-block;
    width: 30px;
    height: 30px;
    background-size: cover;
    opacity: .7;
    position: absolute;
    animation: ${floating} 5s infinite;
`
const Bulbasaur = styled(Span)`
    background-image: url(${bulbasaur});
`
const Charmander = styled(Span)`
    background-image: url(${charmander});
`
const Squirtle= styled(Span)`
    background-image: url(${squirtle});
`
const Pikachu = styled(Span)`
    background-image: url(${pikachu});
`
export { BackShapes }