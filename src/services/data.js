import axios from "axios";

const getPeople = async (url) => {
    try {
        const response = await axios.get(url);
        const filterProps = response.data.results.map((person) => ({
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
    }
};

export const dataService = {
    getPeople,
};
