import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Tourney', sans-serif;
    color: #222;
    //color: #fff;
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