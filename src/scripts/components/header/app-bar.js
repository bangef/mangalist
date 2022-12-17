class AppBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `<header class="container p-4 mx-auto">
			<nav
				class="grid w-full h-20 md:h-24 lg:h-28 rounded-xl bg-black-young place-content-center"
			>
				<h1 class="text-4xl font-bold text-center  text-blue-300">
					Mangalist
				</h1>
			</nav>
		</header>`;
	}
}

customElements.define("app-bar", AppBar);
