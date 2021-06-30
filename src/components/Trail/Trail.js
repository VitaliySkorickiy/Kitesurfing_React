import { useState } from "react";

import MenuNav from '../MenuNav/MenuNav';
import ArrowsNext from '../ArrowsNext/ArrowsNext';
import PLm3 from '../../images/PLm3.jpg'
import PLolen from '../../images/PLolen.png'
import PLdon from '../../images/PLdon.jpg'
import PLkam from '../../images/PLkam.png'
import PLs from '../../images/PLs.png'

import './Trail.scss'


const Trail = () => {

  const beaches = [
    {
      id: 1,
      img: `url(${PLm3})`,
      title: 'Межводное',
      length: '6.7',
      hour: '2',
      minutes: '40',
      price: '1.970',
    },
    {
      id: 2,
      img: `url(${PLolen})`,
      title: 'Оленевка',
      length: '3.2',
      hour: '2',
      minutes: '20',
      price: '1.730',
    },
    {
      id: 3,
      img: `url(${PLdon})`,
      title: 'Мирный',
      length: '9.5',
      hour: '1',
      minutes: '20',
      price: '1.230',
    },
    {
      id: 4,
      img: `url(${PLkam})`,
      title: 'Каменское',
      length: '8.3',
      hour: '1',
      minutes: '50',
      price: '1.320',
    },
    {
      id: 5,
      img: `url(${PLs})`,
      title: 'Щёлкино',
      length: '4.8',
      hour: '2',
      minutes: '20',
      price: '1.430',
    },
  ];

  let [count, setCount] = useState(0);

  const onClickNext = () => {
    setCount(current => current === beaches.length - 1 ? 0 : current + 1);
  };

  const beachesInfo = beaches.map(beach => {

    return (

      <div className=" holder-slider">

        <div className="holder-slider__head" style={{ backgroundImage: `${beach.img}` }} >

          <div className="holder-slider__subtitle">
            <div className="subtitle">
              <div className="headerline-left">Берег</div>
              <div className="subtitle__head">{beach.title}</div>
            </div>
          </div>

        </div>

        <div className="holder-slider__info-trail">

          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle">Маршрут</div>
            <div className="holder-slider__info-title">Симферополь - <br />{beach.title}</div>
          </div>

          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle">Пляж</div>
            <div className="holder-slider__info-title">{beach.length} км</div>
          </div>

          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle">Время пути</div>
            <div className="holder-slider__info-title">{beach.hour} часа<br />{beach.minutes} минут</div>
          </div>

          <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle">Стоимость</div>
            <div className="holder-slider__info-title">{beach.price} руб.</div>
          </div>

        </div>
      </div>

    )
  })

  return (
    <>
      <MenuNav />
      <ArrowsNext onClickNext={onClickNext} />


      <section className="holder">
        <div className="container">
          <div className="title">
            <div>
              <span className="subtitle wow animate__animated animate__fadeInLeft" data-wow-offset="400">Пляж</span>
              <h3>Пляж</h3>
            </div>
          </div>

          <div className="descr-trail">
            <div className="headerline-right">Такси</div>
            <div className="descr__head">Визит-Авто</div>
          </div>

          {beachesInfo[count]}

          <div className="holder-slider__info-virgin"></div>

          <div className="holder-slider__btn">
            <a className="btn" href="/">
              заказ <span>такси</span>
            </a>
          </div>

        </div>
      </section>
    </>

  )
}

export default Trail;