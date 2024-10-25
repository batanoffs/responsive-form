import { formatString } from "../../utils/index";

import styles from "./forms.module.css";

export const CustomInput = ({
    type,
    placeholder,
    disabled = false,
    name,
    value,
    onChange,
    className,
}) => {
    // Added a check only for type submit because others are not needed for this assignment
    if (type === "submit") {
        return (
            <input
                type={type}
                value={value}
                className={className}
                disabled={disabled}
            />
        );
    }

    return (
        <div className={styles.container}>
            <label htmlFor={name}>
                {formatString.firstCharUpperCase(name)}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    );
};
