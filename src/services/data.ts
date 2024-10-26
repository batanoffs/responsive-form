import axios from 'axios';
import { Person } from '../interfaces/person.interface';

const getPeople = async (url: string) => {
	try {
		const response = await axios.get(url);
		const filterProps = response.data.results.map((person: Person) => ({
			name: person.name,
			mass: person.mass,
			height: person.height,
			hair_color: person.hair_color,
			skin_color: person.skin_color,
		}));

		const pagination = {
			next: response.data.next,
			prev: response.data.previous,
		};

		return { filterProps, pagination };
	} catch (error) {
		console.error(error);
		return { filterProps: [], pagination: { next: null, prev: null } }; // return a default value
	}
};

export const dataService = {
	getPeople,
};
