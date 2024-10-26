import styles from './button.module.css';

type ButtonProps = {
	value: string;
	onClick: () => void;
	disabled?: boolean;
};

export const Button = ({ value, onClick, disabled }: ButtonProps) => {
	return (
		<button className={styles.button} onClick={onClick} disabled={disabled}>
			{value}
		</button>
	);
};
