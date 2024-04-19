import React from 'react'

const getLuckyNumber = (max=24) => {
  const validMax = typeof max === 'number' && max > 0 ? max : 24;
  // setLuckyNumber(Math.floor(Math.random() * validMax));
};

const getRandomNumber = () => {
  return (
    null
  )
}

export default getRandomNumber
