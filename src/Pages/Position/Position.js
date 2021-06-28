import React, { useState } from "react";

import MenuNav from '../../components/MenuNav/MenuNav';

import DotsMap from '../../components/DotsMap/DotsMap';
import Cards from '../../components/Cards/Cards';

import './Position.scss'

const Position = () => {

  let [cardNum, setCard] = useState(0);


  const showCard = (indexDot) => {
    console.log(indexDot);
    setCard(indexDot)
  }

  return (
    <>
      <MenuNav />

      <div className="surf">
        <div className="title">
          <div>
            <span className="subtitle wow animate__animated animate__fadeInLeft" data-wow-offset="400">Кайт</span>
            <h3>Сёрфинг</h3>
          </div>
        </div>

        <div className="surf__subtitle">
          <div className="subtitle">
            <div className="headerline-left">Текущее положение</div>
            <div className="subtitle__head">Крым <span>|</span> РФ</div>
          </div>
        </div>

        <div className="slider-map">
          <Cards cardNum={cardNum} />
          <DotsMap showCard={showCard} />
        </div>
      </div>

    </>

  );
};

export default Position;