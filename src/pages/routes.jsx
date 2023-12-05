import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Descripition } from './post';
import styled from 'styled-components';

const AppRoutes = () => (
  <Div>
    <Logo src="/src/assets/images/logo.svg" alt="Pokémon Logo" />

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/post/:id' element={<Descripition />} />
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