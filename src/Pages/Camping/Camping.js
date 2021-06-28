import { useState } from "react";

import MenuNav from '../../components/MenuNav/MenuNav';
import ArrowsNext from '../../components/ArrowsNext/ArrowsNext';

import otel1 from '../../images/otel1.jpg'
import otel2 from '../../images/otel2.jpg'
import otel3 from '../../images/otel3.jpg'
import otel4 from '../../images/otel4.jpg'
import otel5 from '../../images/otel5.jpg'
import star from '../../images/star.svg'

import './Camping.scss'


const Camping = () => {

  const hotels = [
    {
      id: 1,
      img: `url(${otel1}`,
      title: 'империя',
    },
    {
      id: 2,
      img: `url(${otel2}`,
      title: 'маяк',
    },
    {
      id: 3,
      img: `url(${otel3}`,
      title: 'лагуна',
    },
    {
      id: 4,
      img: `url(${otel4}`,
      title: 'ривьера',
    },
    {
      id: 5,
      img: `url(${otel5}`,
      title: 'усадьба',
    },

  ];

  let [count, setCount] = useState(0);

  const onClickNext = () => {
    setCount(current => current === hotels.length - 1 ? 0 : current + 1);
  };

  const hotelsInfo = hotels.map(hotel => {

    return (

      <div className="holder__slider">

        <div className="holder__slider-item holder-slider">

          <div className="holder-slider__head" style={{ backgroundImage: `${hotel.img}` }}>
            <div className="holder-slider__subtitle">
              <div className="subtitle">
                <div className="headerline-left">Отель</div>
                <div className="subtitle__head">{hotel.title}</div>
              </div>
            </div>

            <div className="holder-slider__descr">

              <div className="descr">
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
          </div>



          <div className="holder-slider__info">
            <div className="holder-slider__info-gamak"></div>


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
                    defaultValue='1'
                  />
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
                    defaultValue='1'
                  />
                </div>
                гостей
              </div>
            </div>

            <div className="holder-slider__info-item">
              <div className="holder-slider__info-subtitle">стоимость</div>
              <div className="holder-slider__info-title">
                <span className="summ" data-nights="55" data-guests="25"></span>
                USD
              </div>
            </div>

          </div>

          <div className="holder-slider__btn">
            <a className="btn" href="/">
              снять <span>номер</span>
            </a>
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
          {hotelsInfo[count]}
        </div>
      </section>
    </>

  )
}

export default Camping;