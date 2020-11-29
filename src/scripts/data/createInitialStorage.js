import { dataCategoriesCards, dataCardsWords } from '../data/dataCards';

export const createInitialStorage = () => {
  const statistics = dataCategoriesCards.reduce((stats, category) => {
    const { categoryName, id: index } = category;

    const words = dataCardsWords[index].map((word) => {
      return {
        word: word.word,
        translation: word.translation,
        clicksTrain: 0,
        successGame: 0,
        errorGame: 0,
        percent: 0,
      };
    });

    return { ...stats, [categoryName]: words };
  }, {});

  return statistics;
};
