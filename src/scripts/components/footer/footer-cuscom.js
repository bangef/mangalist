class FooterCuscom extends HTMLElement {
	parentClass = "container grid p-4 mx-auto mt-4 place-content-center";

	clx() {
		if (this.parentClass !== "") {
			const classes = this.parentClass.split(" ");
			classes.forEach((e) => this.classList.add(e));
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.clx();
		this.innerHTML = `<p class="font-semibold text-white-cstm">KitsuXBangef © 2022</p>`;
	}
}

customElements.define("footer-cuscom", FooterCuscom);
