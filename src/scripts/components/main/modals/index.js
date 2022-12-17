class Modals extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `<div
				id="defaultModal"
				class="fixed inset-0 justify-center hidden w-full h-full p-4 overflow-x-hidden overflow-y-auto z-10items-center h-modal bg-black-old/10 backdrop-blur-sm"
			>
				<div class="relative w-full h-full max-w-2xl md:h-auto">
					<!-- Modal content -->
					<div class="relative rounded-lg shadow bg-black-young">
						<!-- Modal header -->
						<div class="flex items-start justify-between p-4 rounded-t">
							<h3 class="text-2xl font-semibold text-white-cstm">
								Lorem, ipsum dolor.
							</h3>
							<button
								type="button"
								class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<svg
									class="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
							</button>
						</div>
						<!-- Modal body -->
						<div class="p-6 text-white-cstm">
							<div class="grid w-full h-auto bg-red-500 place-content-center">
								<img
									src="https://media.kitsu.io/manga/1/poster_image/medium-5c1bd30a5d7538f9925796d3bbc013f4.jpeg"
									alt="testing"
									width="300"
									height="400"
									class="aspect-[3/4] rounded-lg"
								/>
							</div>
							<p class="text-base leading-relaxed">
								With less than a month to go before the European Union enacts
								new consumer privacy laws for its citizens, companies around the
								world are updating their terms of service agreements to comply.
							</p>
						</div>
					</div>
				</div>
			</div>`;
	}
}
