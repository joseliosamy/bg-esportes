// Utilities
import React from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';

// Partial components
import Home from './pages/Home';

// pages
import About from './pages/Sobre';

const Error = styled.div`
  height: calc(100vh - 221px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000dd;
`;

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sobre">
        <About />
      </Route>

      <Route path="/eventos">Eventos</Route>

      <Route path="/ferramentas">Ferramentas</Route>

      <Route path="*">
        <Error>
          <h1>Página não econtrada!</h1>
          <small>Tente entrar em uma página existente no site.</small>
        </Error>
      </Route>
    </Switch>
  );
}

export default Routes;
