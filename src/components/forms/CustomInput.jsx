import { formatString } from "../../utils/index";

export const CustomInput = ({
    type,
    placeholder,
    name,
    value,
    onChange,
    className,
}) => {
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
