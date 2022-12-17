class PaginationCuscom extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	parentClass = `max-w-[250px] container justify-between mx-auto flex bg-red-500 gap-4 mt-4 h-16`;

	clx() {
		if (this.parentClass !== "") {
			const classes = this.parentClass.split(" ");
			classes.forEach((e) => this.classList.add(e));
		}
	}

	set clickEvent(event) {
		this._clickEventPrev = event[0];
		this._clickEventNext = event[1];
		this.render();
	}

	set embedClass(dataLinks) {
		this._embedClass = dataLinks;
		this.render();
	}

	render() {
		this.clx();
		this.innerHTML = `
				<button
					id="btn-prev"
					class="w-1/2 font-bold bg-blue-400 h-fulltext-sm md:text-lg lg:text-xl focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-blue-500 rounded-l-xl text-white-cstm"
					type="button"
				>
					Prev
				</button>
				<button
					id="btn-next"
					class="w-1/2 h-full text-sm font-bold bg-blue-400 md:text-lg lg:text-xl focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-blue-500 rounded-r-xl text-white-cstm"
					type="button"
				>
					Next
				</button>
        `;

		this.querySelector("#btn-prev").addEventListener(
			"click",
			this._clickEventPrev
		);

		this.querySelector("#btn-next").addEventListener(
			"click",
			this._clickEventNext
		);
	}
}

customElements.define("pagination-cuscom", PaginationCuscom);
