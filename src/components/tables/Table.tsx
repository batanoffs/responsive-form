import { TableRow } from './TableRow';

import styles from './table.module.css';

type TableProps = {
	tableTitlesArr: string[];
	dataArr: {
		name: string;
		mass: string;
		height: string;
		hair_color: string;
		skin_color: string;
	}[];
};

interface EmptyRowProps {
	count: number;
}

const EmptyRow = ({ count }: EmptyRowProps) =>
	count > 0 && (
		<>
			{Array.from({ length: count }, (_, index) => (
				<tr key={index} className={styles.loader}>
					<td colSpan={5} />
				</tr>
			))}
		</>
	);

export const Table = ({ tableTitlesArr, dataArr }: TableProps) => {
	const isLoading = dataArr.length === 0;
	const TableData = () => dataArr.map((data, index) => <TableRow key={index} props={data} />);
	const state = isLoading ? <EmptyRow count={10} /> : <TableData />;

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{tableTitlesArr.map((title, index) => (
						<th key={index}>{title}</th>
					))}
				</tr>
			</thead>
			<tbody>{state}</tbody>
		</table>
	);
};
