class CardCuscom extends HTMLElement {
	parentClass =
		"aspect-[3/4] bg-black-young rounded-lg overflow-hidden relative";

	connectedCallback() {
		this.render();
	}

	set card(card) {
		if (card) {
			this.handleDataCard(card);
		}
	}

	clx() {
		if (this.parentClass !== "") {
			const classes = this.parentClass.split(" ");
			classes.forEach((e) => this.classList.add(e));
		}
	}

	handleDataCard(card) {
		if (card) {
			const {
				canonicalTitle,
				averageRating,
				posterImage: { small },
			} = card.attributes;
			this._card = {
				judul: canonicalTitle,
				rating: averageRating,
				imgPath: small,
			};
		}
	}

	render() {
		this.clx();
		this.innerHTML = `
					<div
						class="${
							this._card.rating ? "" : "hidden"
						} absolute z-10 grid w-14 h-14 border-2 border-yellow-500 border-dashed rounded-full shadow-lg shadow-black-young bg-black-young top-2 right-2 place-content-center md:top-3 md:right-3"
					>
						<p class="text-sm font-semibold text-yellow-500">${this._card.rating}</p>
					</div>
					<img
						src="${this._card.imgPath ?? ".	/images/no-image.jpg"}"
						alt="Cover ${this._card.judul}"
						width="300"
						height="400"
						class="w-full h-full transition-all scale-100 cursor-pointer hover:scale-125 hover:rotate-3"
					/>
					<div
						class="absolute bottom-0 grid content-center w-full px-2 rounded-tl-lg rounded-tr-lg md:px-8 sm:px-4 text-start h-1/3 bg-black-young md:h-1/4"
					>
						<h1
							class="text-sm font-semibold sm:text-md md:text-lg lg:text-2xl text-white-cstm"
						>
							${this._card.judul}
						</h1>
					</div>`;
	}
}

customElements.define("card-cuscom", CardCuscom);
