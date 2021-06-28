import navIco1 from '../../images/nav-ico-1.svg'
import navIco2 from '../../images/nav-ico-2.svg'
import navIco3 from '../../images/nav-ico-3.svg'
import navIco4 from '../../images/nav-ico-4.svg'
import home_nav_icon from '../../images/home_nav_icon.svg'

import { Link } from 'react-router-dom';



import './MenuNav.scss'

const MenuNav = () => {


  const btns = [
    {
      title: 'главная',
      href: '/',
      img: home_nav_icon
    },
    {
      title: 'карта',
      href: '/position',
      img: navIco1
    },
    {
      title: 'маршрут',
      href: '/trail',
      img: navIco2
    },
    {
      title: 'кемпинг',
      href: '/camping',
      img: navIco3
    },
    {
      title: 'прокат',
      href: '/rent',
      img: navIco4
    }
  ];

  const btnNav = btns.map((btn, id) => {

    return (
      <li key={id}>
        <Link to={btn.href}>
          <img src={btn.img} alt={btn.title} />
          <span>{btn.title}</span>
        </Link>
      </li >

    )
  })

  return (
    <div className="header__aside_menu">
      <nav className="menu_page">
        <ul className="menu__list">
          {btnNav}
        </ul>
        <div className="menu_border"></div>
      </nav>
    </div >

  )
}

export default MenuNav;