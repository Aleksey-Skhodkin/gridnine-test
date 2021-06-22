export function dateFormater(str) {
	const days = ['пн.', 'вт.', 'ср.', 'чт.', 'пт.', 'сб.', 'вс.'];
	const months = ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];

	const date = new Date(str);

	const getDate = date.getDate();
	const getMonth = date.getMonth();
	const getDay = date.getDay();

	const resultDate = `${getDate} ${months[getMonth]} ${days[getDay - 1]}`;

	return resultDate;
}

export function timeFormater(str) {
	const date = new Date(str);

	const hours = String(date.getHours());
	const minutes = String(date.getMinutes());

	const time = `${hours.length === 1 ? `0${hours}` : hours}:${minutes.length === 1 ? `0${minutes}` : minutes}`;
	return time
}

export function durationToTimeFormater(num) {
	const hours = Math.floor(num / 60);
	const minutes = num % 60;
	const result = `${hours} ч ${minutes} мин`;
	return result;
}

export function debounce(fn, ms = 1000) {
	let timer;

	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), ms)
	}
}

export function filterByTransfer(state, filters) {
	if (!filters) return state;

	if (filters?.length === 1 && filters?.includes("noTransfer")) return state.filter(i => i.legs[0].segments.length < 2 && i.legs[1].segments.length < 2);
	if (filters?.length === 1 && filters?.includes("oneTransfer")) return state.filter(i => i.legs[0].segments.length > 1 || i.legs[1].segments.length > 1);
	return state;
}

export function filterByPriceRange(arr, range) {
	if (!range) return arr;
	const { min, max } = range;
	// console.log(`min: ${min}, max: ${max}`);
	if (!min && !max) return arr;
	if (min && !max) return arr?.filter(i => i.price.total.amount >= min);
	if (!min && max) return arr?.filter(i => i.price.total.amount <= max);
	return arr?.filter(i => i.price.total.amount >= min && i.price.total.amount <= max);
}

export function sortFlights(arr, value) {
	const newArr = arr && [...arr];
	if (value === 'priceUpToDown') return newArr.sort((a, b) => a.price.total.amount - b.price.total.amount);
	if (value === 'priceDownToUp') return newArr.sort((a, b) => b.price.total.amount - a.price.total.amount);
	if (value === 'priceTravelTime') return newArr.sort((a, b) => {
		return a.legs[0].duration + a.legs[1].duration - b.legs[0].duration - b.legs[0].duration
	})
}