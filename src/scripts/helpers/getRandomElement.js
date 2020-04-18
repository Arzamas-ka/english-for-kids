
let gameCards = [];
let answeredCards = [];
export const startGame = (cards) => {
  gameCards = [...cards];
  console.log(gameCards);

  answeredCards = [];
  console.log(answeredCards);
};

export const getRandomElement = (dataCards) => {

  const randomElement = dataCards[Math.floor(Math.random() * dataCards.length)];

  console.log('dataCards ', dataCards);
  console.log('randomElement ', randomElement);

    const newArrayDataCards = dataCards.filter(elem => elem.word !== randomElement.word);
    console.log('newArrayDataCards ', newArrayDataCards);


  // let arrExpressionRandom = [];
  // arrExpressionRandom.push(randomElement, newArrayDataCards);

  // return arrExpressionRandom;
  return randomElement;
};
