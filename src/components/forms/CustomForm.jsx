import styles from "./forms.module.css";

export const CustomForm = ({ children, submitHandler }) => {
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            {children}
        </form>
    );
};
