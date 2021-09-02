import { levelOne, levelTwo, levelThree, levelFour } from './gameLevels';

const matched = [];
const allMatches = [];

//* - clear any array
const clearArray = (arr) => {
  arr.splice(0, arr.length);
};

//* Check if board is clear
export const isLevelClear = (level) => {
  if (!level) return false;

  const levelIsClear = allMatches.length === level.length;
  return levelIsClear;
};

//* Set the next level
export const setNextLevel = () => {
  const allLevels = [levelOne, levelTwo, levelThree, levelFour];
  const levelIncrement = 1;
  let level;
  let nextLevel;

  for (let i = 0; i < allLevels.length; i++) {
    level = allLevels[i];

    if (allMatches.length === level.length) {
      nextLevel = allLevels[i + levelIncrement];
    }
  }
  return nextLevel;
};

export const clearBoard = () => {
  clearArray(matched);
  clearArray(allMatches);
};

//* Store matched cards
const storeMatchedCards = (cards) => {
  cards.map((card) => {
    matched.push(card);
    return matched;
  });
  matched.map((card) => {
    allMatches.push(card);
    return allMatches;
  });
  clearArray(matched);
  return allMatches;
};

//* Show result of choice
const choiceResult = (isMatched, cards) => {
  if (isMatched) {
    [...cards].forEach((playerCard) => {
      playerCard.isMatched();
      setTimeout(() => {
        playerCard.hideCard();
      }, 1000);
    });
    storeMatchedCards(cards);
  } else {
    [...cards].forEach((playerCard) => {
      playerCard.isNotMatched();
      setTimeout(() => {
        playerCard.resetCard();
      }, 1000);
    });
  }
};

//* - Check if cards are matching
export const compareCards = (cards) => {
  const playerCard1 = cards[0].value;
  const playerCard2 = cards[1].value;
  const isMatched = playerCard1 === playerCard2;
  choiceResult(isMatched, cards);
  return isMatched;
};
