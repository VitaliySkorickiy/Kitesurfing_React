import { useState } from "react";

// import { useCount } from '../Hooks/useCount';

import MenuNav from '../MenuNav/MenuNav';
import ArrowsNext from '../ArrowsNext/ArrowsNext';

import star from '../../images/star.svg'
import surfboard from '../../images/surfboard.png'
import surfboard2 from '../../images/surfboard2.png'
import surfboard3 from '../../images/surfboard3.png'
import kupol2 from '../../images/kupol2.png'
import kupol from '../../images/kupol.png'

import './Rent.scss'


const Rent = () => {

  const products = [
    {
      id: 1,
      img: `${surfboard}`,
      title: 'NORTH PULSE KITE 2020',
      price: '1.599',
    },

    {
      id: 2,
      img: `${surfboard2}`,
      title: 'CABRINHA SWITCHBLADE 2020',
      price: '1.799',
    },

    {
      id: 3,
      img: `${surfboard3}`,
      title: 'NORTH CARVE KITE 2020',
      price: '1.199',
    },

  ];

  let [count, setCount] = useState(0);

  const onClickNext = () => {
    setCount(count => count === products.length - 1 ? 0 : count + 1);
  };

  const productsInfo = products.map(product => {

    return (
      <div className="shop__slider-inner">
        <div className="shop__slider-info">

          <div className="descr">
            <div className="headerline-right">стиль</div>
            <div className="descr__head descr__head-shop">
              {product.title}
            </div>
          </div>

          <div className="shop__slider-price">
            <ul className="shop__star-list star-list">
              <li><img src={star} alt="" /></li>
              <li><img src={star} alt="" /></li>
              <li><img src={star} alt="" /></li>
              <li><img src={star} alt="" /></li>
              <li><img src={star} alt="" /></li>
            </ul>
            ${product.price} <sup> 99</sup>
          </div>

          <div className="shop__slider-btn">
            <a className="btn" href="/">
              <span>подробнее</span>
            </a>
          </div>

        </div>

        <div className="shop__slider-content">

          <div className="surfboard">
            <img src={product.img} alt="/" />

            <div className="surfboard-box surfboard__position--1">
              <div className="surfboard-box__circle">
                <div className="circle-row"></div>
                <div className="circle-row"></div>
              </div>
              <div className="surfboard-box__content">
                поверхность с V - образной формой
              </div>
            </div>

            <div className="surfboard-box surfboard__position--2">
              <div className="surfboard-box__circle">
                <div className="circle-row"></div>
                <div className="circle-row"></div>
              </div>
              <div className="surfboard-box__content">
                антискользящее покрытие
              </div>
            </div>

            <div className="surfboard-box surfboard__position--3">
              <div className="surfboard-box__circle">
                <div className="circle-row"></div>
                <div className="circle-row"></div>
              </div>
              <div className="surfboard-box__content">
                надежная фиксация ног
              </div>
            </div>

          </div>

        </div>
      </div>

    )
  })

  return (

    <section className="shop">
      <ArrowsNext onClickNext={onClickNext} />

      <MenuNav />

      <div className="title">
        <div>
          <span className="subtitle wow animate__animated animate__fadeInLeft" data-wow-offset="400">Прокат</span>
          <h3>Прокат</h3>
        </div>
      </div>

      {productsInfo[count]}

      <div className="shop__extras">
        <div className="shop__extras-title">
          кайт
        </div>
        <div className="shop__extras-inner">
          <div className="shop__extras-box">
            <div className="shop__extras-img">
              <img src={kupol2} alt="/" />
            </div>
            <div className="shop__extras-name">Blade Trigger G10</div>
            <div className="shop__extras-price">32 500 руб</div>
          </div>
          <div className="shop__extras-box">
            <div className="shop__extras-img">
              <img src={kupol} alt="/" />
            </div>
            <div className="shop__extras-name">Gaastra Pure 2014</div>
            <div className="shop__extras-price">27 400 руб</div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Rent;