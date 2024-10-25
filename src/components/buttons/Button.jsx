import styles from "./button.module.css";

export const Button = ({ value, onClick, disabled }) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {value}
        </button>
    );
};
