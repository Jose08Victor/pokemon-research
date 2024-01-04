import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Descripition } from './post';
import whiteLogo from '../assets/white-logo.svg';
import blackLogo from '../assets/black-logo.svg';
import styled from 'styled-components';
import { ThemeContext, themes } from '../contexts/theme-context';

const AppRoutes = () => {
  const {theme} = useContext(ThemeContext);

  return (
  <Div>
    <Logo src={theme === themes.light ? blackLogo : whiteLogo} alt="Pokémon Logo" />

    <BrowserRouter>
      <Routes>
        <Route exact path='/pokemon-research' element={<Home />} />
        <Route exact path='/:id' element={<Descripition />} />
      </Routes>
    </BrowserRouter>
  </Div>
)};

const Div = styled.div`
    display: flex;
    align-items: center;
    max-width: 75%;
    min-height: 100vh;
    margin: 0 auto;
    flex-direction: column;
    position: relative;

    @media (max-width: 600px) {
      max-width: 100%;
      padding: 0 20px;
    }
`
const Logo = styled.img`
    max-width: 60%;
    max-height: 100%;
    margin-bottom: 50px;

    @media (max-width: 600px) {
      max-width: 100%;
      margin-top: 30px;
    }
`

export { AppRoutes };