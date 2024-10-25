import { useCallback, useState } from "react";
import { dataService } from "../services/data";

export const useData = (initialStateValues, initialStatePagination) => {
    const [data, setData] = useState(initialStateValues);
    const [pagination, setPagination] = useState(initialStatePagination);

    //Returns a memoized version of the callback that only changes if one of the inputs has changed.
    const fetchData = useCallback(async (url) => {
        const response = await dataService.getPeople(url);
        const { filterProps, pagination } = response;

        setPagination(pagination);
        setData(filterProps);
    }, []);

    const getPagination = async (url) => {
        if (url !== null) {
            await fetchData(url);
        }
    };

    return {
        data,
        pagination,
        fetchData,
        getPagination,
    };
};
