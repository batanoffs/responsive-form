import { useCallback, useState } from 'react';
import { dataService } from '../services/data';

type Pagination = {
	next: string | null;
	prev: string | null;
};

type ResponseProps = {
	filterProps: [];
	pagination: Pagination;
};

export const useData = (initialStateValues: [], initialStatePagination: Pagination) => {
	const [data, setData] = useState(initialStateValues);
	const [pagination, setPagination] = useState(initialStatePagination);

	//Returns a memoized version of the callback that only changes if one of the inputs has changed.
	const fetchData = useCallback(async (url: string) => {
		const response = await dataService.getPeople(url);
		const { filterProps, pagination }: ResponseProps = response;

		setPagination(pagination);
		setData(filterProps);
	}, []);

	const getPagination = async (url: string) => {
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
