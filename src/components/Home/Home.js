import React, { useState } from "react";

import Map1 from '../Maps/map1/Map1';
import Map2 from '../Maps/map2/Map2';
import Map3 from '../Maps/map3/Map3';
import HeaderDots from '../HeaderDots/HeaderDots';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import HeaderAside from '../HeaderAside/HeaderAside';

import ArrowsNext from '../ArrowsNext/ArrowsNext';

import headerBg from '../../images/headerslider-bg.jpg'
import headerBg1 from '../../images/headerslider-bg2.jpg'
import headerBg2 from '../../images/headerslider-bg3.jpg'



import './Home.scss'

const Home = () => {

  const bg = [headerBg, headerBg1, headerBg2];



  const titles = [
    {
      title: 'межводное',
      subTitle: 'оптимальные'
    },
    {
      title: 'оленёвка',
      subTitle: 'хорошие'
    },
    {
      title: 'мирный',
      subTitle: 'наилучшие'
    }
  ];


  let [count, setCount] = useState(0);

  const onClickNext = () => {
    setCount(current => current === titles.length - 1 ? 0 : current + 1);
  };



  return (
    <>

      <header className="header">

        <div className="header__title">
          Crimea Kitesurfing
        </div>

        <HeaderAside />

        <div className="header__slider">

          <ArrowsNext onClickNext={() => onClickNext()} />

          <div className="header__slider-item slider-item" style={{ backgroundImage: `url(${bg[count]})` }}>

            {count === 0 && <Map1 />}
            {count === 1 && <Map2 />}
            {count === 2 && <Map3 />}

            <HeaderInfo showTitle={titles[count]} />
          </div>
        </div>

        <HeaderDots dotsNames={titles} count={count} />

      </header >


    </>
  );
};

export default Home;