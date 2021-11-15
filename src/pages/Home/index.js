import React from 'react';
import { Link } from 'react-router-dom';
import { HomeArea } from './styled';

import bannerHome from '../../images/bannerHome.jpg';
// import BuyToWhatsapp from '../../components/partials/BuyToWhatsapp';

function Home() {
  return (
    <>
      <HomeArea>
        <Link to="/">
          <img src={bannerHome} />
        </Link>
      </HomeArea>
    </>
  );
}
export default Home;
