class SearchBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.querySelector("#searchElement").value;
	}

	render() {
		this.innerHTML = `<section class="container max-w-lg p-4 mx-auto">
				<div class="w-full sm:grid sm:grid-cols-4 sm:gap-4">
					<input 
                        id="searchElement"
						type="text"
						placeholder="Cari Judul Manga..."
						class="h-16 w-full rounded-lg text-2xl font-light focus:outline-none focus:ring-4 focus:ring-gray-300 p-4 text-white sm:col-span-3 bg-[rgba(255,255,255,0.1)]"
					/>
					<button
						id="searchButtonElement" class="grid w-full h-16 p-0 mt-4 overflow-hidden text-white transition-all ease-out bg-blue-400 rounded-lg place-content-center sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-gray-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-8 h-8"
						>
							<path
								fill-rule="evenodd"
								d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</section>
        `;

		this.querySelector("#searchButtonElement").addEventListener(
			"click",
			this._clickEvent
		);
	}
}

customElements.define("search-bar", SearchBar);
