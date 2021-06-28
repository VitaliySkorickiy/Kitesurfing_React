
import MenuNav from '../../components/MenuNav/MenuNav';
import ArrowsNext from '../../components/ArrowsNext/ArrowsNext';
// import PLm3 from '../../images/PLm3.jpg'

import './Trail.scss'


const Trail = () => {
  return (
    <>
      <MenuNav />

      <ArrowsNext />

      <section className="holder">
        <div className="container">

          <div className="title">
            <div>
              <span className="subtitle wow animate__animated animate__fadeInLeft" data-wow-offset="400">Пляж</span>
              <h3>Пляж</h3>
            </div>
          </div>

          <div className="holder__slider">

            <div className="holder__slider-item holder-slider">

              <div className="holder-slider__head" >
                <div className="holder-slider__subtitle">
                  <div className="subtitle">
                    <div className="headerline-left">Берег</div>
                    <div className="subtitle__head">Межводное</div>
                  </div>
                </div>

                <div className="holder-slider__descr" style={{ backgroundImage: "url(images/virgin.png)" }}>
                  <div className="descr">
                    <div className="headerline-right">Такси</div>
                    <div className="descr__head">Визит-Авто</div>
                  </div>
                </div>
              </div>



              <div className="holder-slider__info">

                <div className="holder-slider__info-item">
                  <div className="holder-slider__info-subtitle">Маршрут</div>
                  <div className="holder-slider__info-title">Симферополь - <br /> Межводное</div>
                </div>

                <div className="holder-slider__info-item">
                  <div className="holder-slider__info-subtitle">Пляж</div>
                  <div className="holder-slider__info-title">6,7 км</div>
                </div>

                <div className="holder-slider__info-item">
                  <div className="holder-slider__info-subtitle">Время пути</div>
                  <div className="holder-slider__info-title">2 часа<br /> 40 минут</div>
                </div>

                <div className="holder-slider__info-item">
                  <div className="holder-slider__info-subtitle">Стоимость</div>
                  <div className="holder-slider__info-title">1,976 руб.</div>
                </div>

              </div>

              <div className="holder-slider__btn">
                <a className="btn" href="/">
                  заказ <span>такси</span>
                </a>
              </div>
            </div>

            {/* <div class="holder__slider-item holder-slider">

              <div class="holder-slider__head" style="background-image: url(images/PLolen.png)">
                <div class="holder-slider__subtitle">
                  <div class="subtitle">
                    <div class="headerline-left">Берег</div>
                    <div class="subtitle__head">Оленёвка</div>
                  </div>
                </div>
              </div>

              <div class="holder-slider__descr" style="background-image: url(images/virgin.png)">
                <div class="descr">
                  <div class="headerline-right">Такси</div>
                  <div class="descr__head">Визит-Авто

                  </div>
                </div>
              </div>

              <div class="holder-slider__info">

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Маршрут</div>
                  <div class="holder-slider__info-title">Симферополь - <br /> Оленёвка</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Пляж</div>
                  <div class="holder-slider__info-title">3,2 км</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Время пути</div>
                  <div class="holder-slider__info-title">2 часа<br /> 20 минут</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Стоимость</div>
                  <div class="holder-slider__info-title">1,745 руб.</div>
                </div>

              </div>

              <div class="holder-slider__btn">
                <a class="btn" href="#">
                  заказ <span>такси</span>
                </a>
              </div>
            </div>

            <div class="holder__slider-item holder-slider">

              <div class="holder-slider__head" style="background-image: url(images/PLdon.jpg);">
                <div class="holder-slider__subtitle">
                  <div class="subtitle">
                    <div class="headerline-left">Берег</div>
                    <div class="subtitle__head">Мирный</div>
                  </div>
                </div>
              </div>

              <div class="holder-slider__descr" style="background-image: url(images/virgin.png);">
                <div class="descr">
                  <div class="headerline-right">Такси</div>
                  <div class="descr__head">Визит-Авто

                  </div>
                </div>
              </div>

              <div class="holder-slider__info">

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Маршрут</div>
                  <div class="holder-slider__info-title">Симферополь - <br /> Мирный</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Пляж</div>
                  <div class="holder-slider__info-title">11,5 км</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Время пути</div>
                  <div class="holder-slider__info-title">1 час<br /> 20 минут</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Стоимость</div>
                  <div class="holder-slider__info-title">1,260 руб.</div>
                </div>

              </div>

              <div class="holder-slider__btn">
                <a class="btn" href="#">
                  заказ <span>такси</span>
                </a>
              </div>
            </div>

            <div class="holder__slider-item holder-slider">

              <div class="holder-slider__head" style="background-image: url(images/PLkam.png);">
                <div class="holder-slider__subtitle">
                  <div class="subtitle">
                    <div class="headerline-left">Берег</div>
                    <div class="subtitle__head">Каменское</div>
                  </div>
                </div>
              </div>

              <div class="holder-slider__descr" style="background-image: url(images/virgin.png);">
                <div class="descr">
                  <div class="headerline-right">Такси</div>
                  <div class="descr__head">Визит-Авто

                  </div>
                </div>
              </div>

              <div class="holder-slider__info">

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Маршрут</div>
                  <div class="holder-slider__info-title">Симферополь - <br /> Каменское</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Пляж</div>
                  <div class="holder-slider__info-title">8,3 км</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Время пути</div>
                  <div class="holder-slider__info-title">1 час<br /> 50 минут</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Стоимость</div>
                  <div class="holder-slider__info-title">1,320 руб.</div>
                </div>

              </div>

              <div class="holder-slider__btn">
                <a class="btn" href="#">
                  заказ <span>такси</span>
                </a>
              </div>
            </div>

            <div class="holder__slider-item holder-slider">

              <div class="holder-slider__head" style="background-image: url(images/PLs.png);">
                <div class="holder-slider__subtitle">
                  <div class="subtitle">
                    <div class="headerline-left">Берег</div>
                    <div class="subtitle__head">Щёлкино</div>
                  </div>
                </div>
              </div>

              <div class="holder-slider__descr" style="background-image: url(images/virgin.png);">
                <div class="descr">
                  <div class="headerline-right">Такси</div>
                  <div class="descr__head">Визит-Авто</div>
                </div>
              </div>

              <div class="holder-slider__info">

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Маршрут</div>
                  <div class="holder-slider__info-title">Симферополь - <br /> Щёлкино</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Пляж</div>
                  <div class="holder-slider__info-title">4,8 км</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Время пути</div>
                  <div class="holder-slider__info-title">2 часа<br /> 20 минут</div>
                </div>

                <div class="holder-slider__info-item">
                  <div class="holder-slider__info-subtitle">Стоимость</div>
                  <div class="holder-slider__info-title">1,430 руб.</div>
                </div>

              </div>

              <div class="holder-slider__btn">
                <a class="btn" href="#">
                  заказ <span>такси</span>
                </a>
              </div>
            </div>
 */}


          </div>
        </div>
      </section>





    </>

  )
}

export default Trail;