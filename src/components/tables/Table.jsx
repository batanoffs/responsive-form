import { TableRow } from "./TableRow";

export const Table = ({ tableTitlesArr, dataArr }) => {
    return (
        <table>
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
