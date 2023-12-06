import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Descripition } from './post';
import logo from "../assets/images/logo.svg"
import styled from 'styled-components';

const AppRoutes = () => (
  <Div>
    <Logo src={logo} alt="Pokémon Logo" />

    <BrowserRouter>
      <Routes>
        <Route exact path='/quest-react-avancado' element={<Home />} />
        <Route exact path='/:id' element={<Descripition />} />
      </Routes>
    </BrowserRouter>
  </Div>
);

const Div = styled.div`
    display: flex;
    align-items: center;
    max-width: 75%;
    min-height: 100vh;
    margin: 0 auto;
    flex-direction: column;
    position: relative;
`
const Logo = styled.img`
    max-width: 60%;
    max-height: 100%;
    margin: 50px 0;
`

export { AppRoutes };