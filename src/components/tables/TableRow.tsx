type TableRowProps = {
	props: {
		name: string;
		mass: string;
		height: string;
		hair_color: string;
		skin_color: string;
	};
};

export const TableRow = ({ props }: TableRowProps) => {
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
