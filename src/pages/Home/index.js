import React from 'react';
import { Link } from 'react-router-dom';
import { HomeArea } from './styled';
import { Delimiters } from '../../components/MainComponets';
import { PromotionsArea } from '../../components/MainComponets';

import bannerHome from '../../images/bannerHome.jpg';
import BuyToWhatsapp from '../../components/partials/BuyToWhatsapp';
import ShowPromotion from '../../components/partials/ShowPromotion';

function Home() {
  return (
    <>
      <HomeArea>
        <div className="banner">
          <Link to="/">
            <img src={bannerHome} alt="Banner" />
          </Link>
        </div>
        <Delimiters>
          <BuyToWhatsapp />

          <h2>Ofertas especiais</h2>

          <PromotionsArea>
            <ShowPromotion price="59,00" title="Bolas de vôlei" />
            <ShowPromotion price="109,90" title="Bolas de campo" />
            <ShowPromotion price="114,90" title="Bolas de society" />
            <ShowPromotion price="30,00" title="Acessórios" />
          </PromotionsArea>
        </Delimiters>
      </HomeArea>
    </>
  );
}
export default Home;
