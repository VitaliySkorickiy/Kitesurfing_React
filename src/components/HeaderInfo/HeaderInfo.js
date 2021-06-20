


import './HeaderInfo.scss'

const HeaderInfo = ({ showTitle }) => {


  return (
    <div className="slider-item__info">
      <div className="slider-item__info-suptitle headerline-left">Кайтинг</div>
      <div className="slider-item__info-title" >{showTitle.title}</div>
      <div className="slider-item__info-suptext headerline-left">Условия</div>
      <div className="slider-item__info-text">{showTitle.subTitle}</div>

    </div>
  )
}

export default HeaderInfo;



