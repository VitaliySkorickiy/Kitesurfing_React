import navIco1 from '../../images/nav-ico-1.svg'
import navIco2 from '../../images/nav-ico-2.svg'
import navIco3 from '../../images/nav-ico-3.svg'
import navIco4 from '../../images/nav-ico-4.svg'
import logo from '../../images/logo.svg'


import './HeaderAside.scss'

const HeaderAside = () => {
  return (

    <div className="header__aside">
      <div className="logo">
        <a href="1">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li>
            <a href="1"><img src={navIco1} alt="оснастка" />
              <span>оснастка</span>
            </a>
          </li>
          <li>
            <a href="1"><img src={navIco2} alt="Маршрут" />
              <span>Маршрут</span>
            </a>
          </li>
          <li>
            <a href="1"><img src={navIco3} alt="Кемпинг" />
              <span>Кемпинг</span>
            </a>
          </li>
          <li>
            <a href="1"><img src={navIco4} alt="Прокат" />
              <span>Прокат</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__date">
        15
        <span>07 | 2020</span>
      </div>
    </div >
  )
}

export default HeaderAside;