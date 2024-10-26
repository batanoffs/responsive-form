import { useEffect } from 'react';

import { useData } from '../../hooks/useData';
import { Table, Button } from '../../components/index';
import { API, tableTitles } from '../../constants/index';

import styles from './table.module.css';

export const TablePage = () => {
	const { data, pagination, fetchData, getPagination } = useData([], {
		next: '',
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
					onClick={() => pagination.prev && getPagination(pagination.prev)}
					disabled={!pagination.prev}
					value={'Previous'}
				/>
				<Button
					onClick={() => pagination.next && getPagination(pagination.next)}
					disabled={!pagination.next}
					value={'Next'}
				/>
			</div>
		</div>
	);
};
