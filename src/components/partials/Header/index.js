import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import imgLogo from '../../../images/icons/logo.png';

function Header() {
  return (
    <>
      <HeaderArea>
        <div>
          <a href="/">COMPRE PELO WHATSAPP</a>
          <a href="/">ATENDIMENTO</a>
          <a href="/">SAC</a>
        </div>
        <nav>
          <div>
            <Link to="/">
              <img src={imgLogo} />
            </Link>
            <ul>
              <li>
                <Link to="/academia">Academia</Link>
              </li>
              <li>
                <Link to="/acessorios">Acessórios</Link>
              </li>
              <li>
                <Link to="/futebol">Futebol</Link>
              </li>
              <li>
                <Link to="/futevolei">Futevôlei</Link>
              </li>
              <li>
                <Link to="/handebol">Handebol</Link>
              </li>
              <li>
                <Link to="/volei">Vôlei</Link>
              </li>
            </ul>
          </div>
          <Link to="/">Parceiros</Link>
        </nav>
      </HeaderArea>
    </>
  );
}

export default Header;
