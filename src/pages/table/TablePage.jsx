import { useEffect } from "react";

import { useData } from "../../hooks/useData";
import { Table, Button } from "../../components/index";
import { API, tableTitles } from "../../constants/index";

import styles from "./table.module.css";

//TODO implement responsive design to the table and create better design for the table
//TODO Loading State: Display a loading state while fetching data from the API.
//TODO Error Handling: Implement error handling for failed API requests.
//TODO add services folder and transfer logic there
//TODO check if folders constants and utils are needed to extract logic
//TODO decide on how to implement loading state

export const TablePage = () => {
    const { data, pagination, fetchData, getPagination } = useData([], {
        next: "",
        prev: null,
    });

    useEffect(() => {
        fetchData(API.people);
    }, []);

    return (
        <div className={styles.container}>
            <Table tableTitlesArr={tableTitles} dataArr={data} />
            <div className={styles.pagination}>
                <Button
                    onClick={() => getPagination(pagination.prev)}
                    disabled={!pagination.prev}
                    value={"Previous"}
                />
                <Button
                    onClick={() => getPagination(pagination.next)}
                    disabled={!pagination.next}
                    value={"Next"}
                />
            </div>
        </div>
    );
};
