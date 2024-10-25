import { formatString } from "../../utils/index";

export const CustomInput = ({
    type,
    placeholder,
    disabled = false,
    name,
    value,
    onChange,
    className,
}) => {
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
        <div>
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
