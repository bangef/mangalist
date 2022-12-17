class Manga {
	static baseUri = "https://kitsu.io/api/edge";

	static getAllManga = async () => {
		const response = await fetch(
			`${this.baseUri}/manga?page%5Blimit%5D=12&page%5Boffset%5D=0`
		);
		const responseJson = await response.json();
		if (responseJson.meta.count > 0) {
			return Promise.resolve(responseJson);
		} else {
			return Promise.reject(`Data Tidak ditemukan...`);
		}
	};

	static getSearchBySlug = async (keyword) => {
		let response = "";
		if (keyword !== "") {
			const newKey = keyword.toLowerCase().replace(" ", "-");
			response = await fetch(`${this.baseUri}/manga?filter[slug]=${newKey}`);
		} else {
			response = await fetch(
				`${this.baseUri}/manga?page%5Blimit%5D=12&page%5Boffset%5D=0`
			);
		}
		const responseJson = await response.json();
		if (responseJson.meta.count > 0) {
			return Promise.resolve(responseJson);
		} else {
			return Promise.reject(`Data "${keyword}" Tidak ditemukan...`);
		}
	};
}

export default Manga;
