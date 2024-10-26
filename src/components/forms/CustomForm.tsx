import styles from './forms.module.css';

type CustomFormProps = {
	children: React.ReactNode;
	submitHandler: (event: React.FormEvent) => void;
};

export const CustomForm = ({ children, submitHandler }: CustomFormProps) => {
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			{children}
		</form>
	);
};
