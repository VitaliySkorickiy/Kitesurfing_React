
import surfIcon from '../../images/surf-icon.svg'
import waterIcon from '../../images/water-icon.svg'
import windIcon from '../../images/wind-icon.svg'

import './Cards.scss'


const Cards = ({ cardNum }) => {

  const cards = [
    {
      id: 1,
      clazz: 'slider-dots--1',
      title: 'Межводное',
      wave: '1 - 3',
      waveValue: 'баллов',
      rainfall: '+2.3',
      rainfallValue: 'мм',
      wind: '3-8',
      windValue: 'м/сек',
    },
    {
      id: 2,
      clazz: 'slider-dots--2',
      title: 'Оленевка',
      wave: '1 - 5',
      waveValue: 'баллов',
      rainfall: '+3.5',
      rainfallValue: 'мм',
      wind: '1-7',
      windValue: 'м/сек',
    },
    {
      id: 3,
      clazz: 'slider-dots--3',
      title: 'Мирный',
      wave: '1 - 5',
      waveValue: 'баллов',
      rainfall: '+4.5',
      rainfallValue: 'мм',
      wind: '1-8',
      windValue: 'м/сек',
    },
    {
      id: 4,
      clazz: 'slider-dots--4',
      title: 'Щёлкино',
      wave: '1 - 4',
      waveValue: 'баллов',
      rainfall: '+2.3',
      rainfallValue: 'мм',
      wind: '2-9',
      windValue: 'м/сек',
    },
    {
      id: 5,
      clazz: 'slider-dots--5',
      title: 'Каменское',
      wave: '1 - 4',
      waveValue: 'баллов',
      rainfall: '+2.3',
      rainfallValue: 'мм',
      wind: '3-8',
      windValue: 'м/сек',
    }
  ];

  const cardsInfo = cards.map(card => {

    return (

      <div key={card.id}  >
        <div className={`slider-dots__content ${card.clazz}`} >
          <div className="slider-dots__content-title">{card.title}</div>
          <div className="slider-dots__content-row">

            <div className="slider-dots__content-item">
              <img src={surfIcon} alt="surfIcon" />
              <div className="slider-dots__content-number">{card.wave}</div>
              <div className="slider-dots__content-name">{card.waveValue}</div>
            </div>

            <div className="slider-dots__content-item">
              <img src={waterIcon} alt="waterIcon" />
              <div className="slider-dots__content-number">{card.rainfall}</div>
              <div className="slider-dots__content-name">{card.rainfallValue}</div>
            </div>

            <div className="slider-dots__content-item">
              <img src={windIcon} alt="windIcon" />
              <div className="slider-dots__content-number">{card.wind}</div>
              <div className="slider-dots__content-name">{card.windValue}</div>
            </div>

          </div>
        </div>
      </div >
    )
  })

  return (
    <div>
      {cardsInfo[cardNum]}
    </div>
  )
}

export default Cards;

