
import './HeaderDots.scss'

const HeaderDots = () => {
  return (
    <div className="slider-dotshead">

      <div className="slider-dots__item">
        <div className="dots-box">
          <div className="dots-box__number">01</div>
          <div className="dots-box__name">Межводное</div>
        </div>
      </div>

      <div className="slider-dots__item">
        <div className="dots-box">
          <div className="dots-box__number">02</div>
          <div className="dots-box__name">Оленёвка</div>
        </div>
      </div>

      <div className="slider-dots__item">
        <div className="dots-box">
          <div className="dots-box__number">03</div>
          <div className="dots-box__name">Мирный</div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDots;

