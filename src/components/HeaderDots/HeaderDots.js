
import './HeaderDots.scss'

const HeaderDots = ({ dotsNames, count }) => {

  let buttons = dotsNames.map((item, id) => {

    const isActive = id === count;
    const green = isActive ? 'green' : 'greeng'

    return (
      <div className="slider-dots__item" key={id}>
        <div className={`dots-box ${green}`}>
          <div className="dots-box__number">0{id + 1}</div>
          <div className="dots-box__name">{item.title}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="slider-dotshead" >
      {buttons}
    </div>
  )
}

export default HeaderDots;

