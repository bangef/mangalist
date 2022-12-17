import Manga from "../data";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const cardsElement = document.querySelector("cards-cuscom");
	const paginationElement = document.querySelector("pagination-cuscom");

	const afterLoad = async () => {
		try {
			const allManga = await Manga.getAllManga();
			renderResult(allManga);
		} catch (err) {
			fallbackResult(err);
		}
	};

	const onButtonSearchCLicked = async () => {
		try {
			const search = await Manga.getSearchBySlug(searchElement.value);
			renderResult(search);
		} catch (err) {
			fallbackResult(err);
		}
	};

	const renderResult = (results) => {
		cardsElement.cards = results;
	};

	const fallbackResult = (message) => {
		cardsElement.renderError(message);
	};

	afterLoad();
	searchElement.clickEvent = onButtonSearchCLicked;
};

export default main;
