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
export const Table = ({ tableTitlesArr, dataArr }: TableProps) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{tableTitlesArr.map((title, index) => (
						<th key={index}>{title}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{dataArr.map((data, index) => (
					<TableRow key={index} props={data} />
				))}
			</tbody>
		</table>
	);
};
