import { useState } from "react";

import MenuNav from '../MenuNav/MenuNav';
import ArrowsNext from '../ArrowsNext/ArrowsNext';

import otel1 from '../../images/otel1.jpg'
import otel2 from '../../images/otel2.jpg'
import otel3 from '../../images/otel3.jpg'
import otel4 from '../../images/otel4.jpg'
import otel5 from '../../images/otel5.jpg'
import star from '../../images/star.svg'
import plus from '../../images/plus.svg'
import minus from '../../images/minus.svg'

import './Camping.scss'


const Camping = () => {

  const hotels = [
    {
      id: 1,
      price: 215,
      img: `url(${otel1}`,
      title: 'империя',
    },
    {
      id: 2,
      price: 125,
      img: `url(${otel2}`,
      title: 'маяк',
    },
    {
      id: 3,
      price: 310,
      img: `url(${otel3}`,
      title: 'лагуна',
    },
    {
      id: 4,
      price: 255,
      img: `url(${otel4}`,
      title: 'ривьера',
    },
    {
      id: 5,
      price: 180,
      img: `url(${otel5}`,
      title: 'усадьба',
    },

  ];

  let [countHotel, setCountHotel] = useState(0);
  const onClickNext = () => {
    setCountHotel(countHotel => countHotel === hotels.length - 1 ? 0 : countHotel + 1);
  };

  const [countNights, setCountNights] = useState(1);
  const onChangeNights = e => setCountNights(e.target.value);
  if (countNights < 1) {
    setCountNights(1);
  } else if (countNights > 30) {
    setCountNights(30)
  }

  const [countGuest, setCountGuest] = useState(1);
  const onChangeGuest = e => setCountGuest(e.target.value);
  if (countGuest < 1) {
    setCountGuest(1);
  } else if (countGuest > 6) {
    setCountGuest(6)
  }

  const order = {
    guest: countGuest,
    nights: countNights,
  };

  const totalPriceItems = (order, hotel) => {
    const priceNights = order.nights * hotel.price;
    const priceGuest = (order.guest * hotel.price) * 0.2;

    return priceNights + priceGuest
  };

  const hotelsInfo = hotels.map(hotel => {

    return (

      <div className="holder__slider-item holder-slider">

        <div className="holder-slider__head"
          style={{ backgroundImage: `${hotel.img}` }}>
          <div className="holder-slider__subtitle">
            <div className="subtitle">
              <div className="headerline-left">Отель</div>
              <div className="subtitle__head">{hotel.title}</div>
            </div>
          </div>

          <div className="descr-hotel">
            <div className="headerline-right">Рейтинг</div>
            <div className="descr__head descr__head-sleep">Отлично
              <ul className="holder__star-list star-list">
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
                <li><img src={star} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="holder-slider__info">
          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle">Курорт</div>
            <div className="holder-slider__info-title"> Межводное</div>
          </div>
          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle"># Ночей</div>
            <div className="holder-slider__info-title">
              <div className="quantity">
                <input
                  className="nights"
                  type="number"
                  min="1"
                  max="9"
                  step="1"
                  value={countNights}
                  onChange={onChangeNights}
                />

                <div className="quantity-nav">
                  <div
                    className="quantity-button quantity-up"
                    onClick={() => setCountNights(countNights + 1)}>
                    <img src={plus} alt="" />
                  </div>

                  <div
                    className="quantity-button quantity-down"
                    onClick={() => setCountNights(countNights - 1)}>
                    <img src={minus} alt="" />
                  </div>
                </div>
              </div>
              ночей
            </div>
          </div>

          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle"># гостей</div>
            <div className="holder-slider__info-title">
              <div className="quantity">
                <input
                  className="guests"
                  type="number"
                  min="1"
                  max="9"
                  step="1"
                  value={countGuest < 1 ? 1 : countGuest}
                  onChange={onChangeGuest}
                />

                <div className="quantity-nav">
                  <div
                    className="quantity-button quantity-up"
                    onClick={() => setCountGuest(countGuest + 1)}>
                    <img src={plus} alt="" />
                  </div>
                  <div
                    className="quantity-button quantity-down"
                    onClick={() => setCountGuest(countGuest - 1)}>
                    <img src={minus} alt="" />
                  </div>
                </div>
              </div>
              гостей
            </div>
          </div>

          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle">стоимость</div>
            <div className="holder-slider__info-title">
              <span className="summ" data-nights="55" data-guests="25">
                ${totalPriceItems(order, hotel)}
              </span>
              <span> USD</span>
            </div>
          </div>
        </div>
      </div>

    )
  })

  return (

    <>
      <MenuNav />
      <ArrowsNext onClickNext={onClickNext} />

      <section className="holder sleep">
        <div className="container">
          <div className="title">
            <div>
              <span className="subtitle wow animate__animated animate__fadeInLeft" data-wow-offset="400">Ночлег</span>
              <h3>Ночлег</h3>
            </div>
          </div>
          {hotelsInfo[countHotel]}
        </div>

        <div className="holder-slider__info-gamak"></div>

        <div className="holder-slider__btn">
          <a className="btn" href="/">
            снять <span>номер</span>
          </a>
        </div>
      </section>
    </>

  )
}

export default Camping;