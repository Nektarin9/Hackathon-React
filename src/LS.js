import { database } from './database';

const readLocalStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
};
export const saveLocalStorage = (DB) => {
	const serializedObject = JSON.stringify(DB);
	localStorage.setItem(DB.name, serializedObject);
};

export const removeLS = (key) => {
	localStorage.removeItem(key);
};

export const readAllLS = () => {
	let arrayLS = [];
	for (let key in database) {
		if (readLocalStorage(database[key].name)) {
			arrayLS.push(readLocalStorage(database[key].name));
		}
	}
	return arrayLS;
};
