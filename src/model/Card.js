class Card {
	constructor(card, innerCardArray) {
		this.value = card.value;
		this.card = card;
		this.cardId = card.dataset.value;
		this.class = card.className;
		this.innerCardArray = innerCardArray;
		this.flippedCard = '';
		this.backImage = card.dataset.url;
	}

	isClicked = () => {
		for (let i = 0; i < this.innerCardArray.length; i++) {
			const flipCard = this.innerCardArray[i];
			if (flipCard.dataset.value === this.cardId) {
				this.card.setAttribute('disabled', 'disabled');
				flipCard.setAttribute('class', 'mint-card-inner mint-card-flipped');
			}
		}
	};

	isMatched = () => {
		this.card.setAttribute('class', 'mint-card match');
	};

	isNotMatched = () => {
		for (let i = 0; i < this.innerCardArray.length; i++) {
			const flipCard = this.innerCardArray[i];
			if (flipCard.dataset.value === this.cardId) {
				flipCard.setAttribute('class', 'mint-card-inner mint-card-flipped');
			}
		}
		this.card.setAttribute('class', 'mint-card no-match');
	};

	hideCard = () => {
		this.value = null;
		this.card.setAttribute('class', 'mint-card match hide');
	};

	resetCard() {
		for (let i = 0; i < this.innerCardArray.length; i++) {
			const flipCard = this.innerCardArray[i];
			if (flipCard.dataset.value === this.cardId) {
				flipCard.setAttribute('class', 'mint-card-inner');
			}
		}
		this.card.setAttribute('class', 'mint-card');
		this.card.removeAttribute('disabled');
	}
}

export default Card;
