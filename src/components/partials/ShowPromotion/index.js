import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './styled';

function ShowPromotion(props) {
  return (
    <Card>
      <Link to="/">
        <div className="cardHead">{props.title || 'Item não encontrado'}</div>
        <div className="cardBody">
          <div className="content">A PARTIR DE</div>
          <div className="price">
            R$ {props.price || 'Preço não encontrado'}
          </div>
          <div className="button">VER +</div>
        </div>
      </Link>
    </Card>
  );
}
export default ShowPromotion;
