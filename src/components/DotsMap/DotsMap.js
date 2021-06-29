

import './DotsMap.scss'

const DotsMap = ({ showCard }) => {

  const dots = [
    {
      id: 1,
      num: 'slider-dots1',
    },
    {
      id: 2,
      num: 'slider-dots2',
    },
    {
      id: 3,
      num: 'slider-dots3',
    },
    {
      id: 4,
      num: 'slider-dots4',
    },
    {
      id: 5,
      num: 'slider-dots5',
    }
  ];

  const dotsMap = dots.map((dot, i) => {

    return (
      <div
        key={i}
        className={`slider-dots ${dot.num}`}
        onClick={() => showCard(i)}
      >
        <div className="slider-dots__circle"></div>
      </div >
    )
  })

  return (
    <div >
      {dotsMap}
    </div>

  );
};

export default DotsMap;