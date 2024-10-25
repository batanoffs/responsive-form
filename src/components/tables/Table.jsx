import { TableRow } from "./TableRow";

import styles from "./table.module.css";

export const Table = ({ tableTitlesArr, dataArr }) => {
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
