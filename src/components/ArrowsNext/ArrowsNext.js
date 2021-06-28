import arrowsRight from '../../images/arrows-right.svg'

import './ArrowsNext.scss'


const ArrowsNext = ({ onClickNext }) => {



  return (
    <img
      className="slider-arrows slider-arrows__right slick-arrow"
      src={arrowsRight}
      onClick={onClickNext}
      alt="arrows__right">
    </img>
  )

}
export default ArrowsNext;