import React from 'react';
import { Link } from 'react-router-dom';
import { BuyToWhatsappArea } from './styled';

function BuyToWhatsapp() {
  return (
    <BuyToWhatsappArea>
      <Link to="/">
        <span>Compre pelo whatsapp!</span> Fale com nossos vendedores, é rápido
        e fácil! <span>Ver+</span>
      </Link>
    </BuyToWhatsappArea>
  );
}
export default BuyToWhatsapp;
