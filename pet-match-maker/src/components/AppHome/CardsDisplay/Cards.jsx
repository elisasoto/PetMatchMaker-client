import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import './cards.scss';

const mockedAdopters = [
  {
    name: 'saul',
    url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/saul-niguez-of-atletico-madrid-celebrates-scoring-his-sides-news-photo-1598513378.jpg?crop=0.66566xw:1xh;center,top&resize=640:*'
  },
  {
    name: 'brian',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Brian_May_%28NHQ201812310024%29_%28cropped%29.jpg'
  }
];

export default function Cards() {
  const [adoptersList, setAdoptersList] = useState([]);

  useEffect(() => {
    setAdoptersList(mockedAdopters);
  }, [adoptersList]);

  return (
    <div className="cards-container">
      {adoptersList.map((adopter) => (
        <TinderCard
          className="swipe"
          key={adopter.name}
          preventSwipe={['up', 'down']}
          onSwipe={(direction) => {
            console.log(direction);
          }}
        >
          <div className="card">
            <img src={adopter.url} alt={adopter.name} className="image" />
            <h3>{adopter.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
