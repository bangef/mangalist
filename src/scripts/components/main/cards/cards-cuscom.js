import "./card-cuscom";

class CardsCuscom extends HTMLElement {
	parentClass =
		"container p-4 mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4";

	clx() {
		if (this.parentClass !== "") {
			const classes = this.parentClass.split(" ");
			classes.forEach((e) => this.classList.add(e));
		}
	}

	connectedCallback() {
		this.render();
	}

	set cards(cards) {
		this._cards = cards.data;
		this.render();
	}

	render() {
		this.clx();
		this.innerHTML = "";
		if (this._cards) {
			this._cards.forEach((e) => {
				const card = document.createElement("card-cuscom");
				card.card = e;
				this.appendChild(card);
			});
		} else {
			this.renderLoading();
		}
	}

	renderError(message) {
		this.innerHTML = "";
		this.innerHTML += `<h2 class="text-4xl font-bold text-white-cstm">${message}</h2>`;
	}

	renderLoading() {
		this.innerHTML = "";
		this.innerHTML += `<div class="bg-red-500 w-full h-full container mx-auto"><h2 class="text-4xl font-bold text-white-cstm">Tunggu Sebentar...</h2></div>`;
	}
}

customElements.define("cards-cuscom", CardsCuscom);
