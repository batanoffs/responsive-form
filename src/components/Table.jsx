import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import styles from "./table.module.css";

//TODO implement responsive design to the table and create better design for the table
//TODO Loading State: Display a loading state while fetching data from the API.
//TODO Error Handling: Implement error handling for failed API requests.
//TODO add services folder and transfer logic there
//TODO check if folders constants and utils are needed to extract logic
export const Table = () => {
    const [people, setPeople] = useState([]);
    const [pagination, setPagination] = useState({
        next: "",
        prev: null,
    });

    const fetchStarWarsPeople = useCallback(
        async (url) => {
            try {
                const response = await axios.get(url);
                const filterProps = response.data.results.map((person) => ({
                    name: person.name,
                    mass: person.mass,
                    height: person.height,
                    hair_color: person.hair_color,
                    skin_color: person.skin_color,
                }));

                setPagination({
                    next: response.data.next,
                    prev: response.data.previous,
                });
                setPeople(filterProps);
            } catch (error) {
                console.log(error);
            }
        },
        [setPeople]
    );

    useEffect(() => {
        fetchStarWarsPeople("https://swapi.dev/api/people");
    }, []);

    const handlePagination = async (url) => {
        if (url) {
            await fetchStarWarsPeople(url);
        }
    };

    return (
        // TODO create table component with props
        // TODO decide on how to implement loading state
        // TODO maybe update pagination with numbers instead of prev next
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mass</th>
                        <th>Height</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.mass}</td>
                            <td>{person.height}</td>
                            <td>{person.hair_color}</td>
                            <td>{person.skin_color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button
                    onClick={() => handlePagination(pagination.prev)}
                    disabled={!pagination.prev}
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePagination(pagination.next)}
                    disabled={!pagination.next}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
