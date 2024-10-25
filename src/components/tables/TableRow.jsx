export const TableRow = ({ props }) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.mass}</td>
            <td>{props.height}</td>
            <td>{props.hair_color}</td>
            <td>{props.skin_color}</td>
        </tr>
    );
};
