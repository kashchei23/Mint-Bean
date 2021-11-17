/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useEffect } from 'react';
import './Card.scss';
import {
	compareCards,
	setNextLevel,
	isLevelClear,
	clearBoard,
} from '../../controllers/gameControllers';
import { levelOne } from '../../controllers/gameLevels';
import initialState from '../../controllers/config';
import Card from '../../model/Card';

const Cards = () => {
	const [level, setLevel] = useState([initialState]);
	const [cards, setCards] = useState([]);
	const innerCards = useRef([]);
	innerCards.current = [];

	const getInnerCardRefs = (innerE) => {
		if (innerE && !innerCards.current.includes(innerE)) {
			innerCards.current.push(innerE);
		}
	};

	const clickHandler = (e) => {
		const card = e.target;
		const innerCardRefs = innerCards.current;
		const playerCard = new Card(card, innerCardRefs);
		playerCard.isClicked();
		setCards([...cards, playerCard]);
	};

	if (cards.length > 1) {
		compareCards(cards);
		cards.splice(0, cards.length);
	}

	const levelIsClear = isLevelClear(level);

	const nextLevel = () => {
		if (levelIsClear) {
			setLevel(setNextLevel());
			clearBoard();
		}
	};
	useEffect(() => {
		setLevel(levelOne);
	}, []);

	return (
		<div className='game-container'>
			{!levelIsClear ? (
				<div className='board'>
					{level ? (
						<>
							{level.map((card) => (
								<button
									type='button'
									className='mint-card'
									value={card.card}
									key={card.id}
									data-value={card.id}
									onClick={clickHandler}
								>
									<div
										className='mint-card-inner'
										data-value={card.id}
										ref={getInnerCardRefs}
									>
										<div className='mint-card-front'>
											<img
												src='https://res.cloudinary.com/obkidz/image/upload/c_scale,w_500/v1630296509/Mint%20Match/mintcard-round_ghygpk.png'
												alt='mint-match card'
											/>
										</div>
										<div className='mint-card-back'>
											<img src={card.url} alt={card.id} />
										</div>
									</div>
								</button>
							))}
						</>
					) : (
						<div
							className={`level-clear ${levelIsClear ? 'scale' : ''}`}
							style={{ margin: 0 }}
						>
							<h1>Game Over!!</h1>
							<p>Great job! Keep those skills sharp!</p>
							<a href='/mint-match-game' className='next-level-button'>
								Play Again
							</a>
						</div>
					)}
				</div>
			) : (
				<div className='level-clear scale'>
					<h1>You did it!</h1>
					<p>Click the button for the next level!</p>
					<button
						type='button'
						className='next-level-button'
						onClick={nextLevel}
					>
						Next Level
					</button>
				</div>
			)}
		</div>
	);
};

export default Cards;
