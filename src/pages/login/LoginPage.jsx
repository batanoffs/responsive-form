import { CustomForm, CustomInput } from "../../components/index";
import { useForm } from "../../hooks/useForm";

import styles from "./login.module.css";

export const LoginPage = () => {
    const { values, changeHandler, onSubmitHandler } = useForm({
        user: "",
        password: "",
    });

    return (
        //TODO improve design
        <div className={styles.container}>
            <h1>Login</h1>
            <CustomForm submitHandler={onSubmitHandler}>
                <CustomInput
                    id="user"
                    name="user"
                    value={values.user}
                    onChange={changeHandler}
                />
                <CustomInput
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={changeHandler}
                />
                <CustomInput
                    className="login-button"
                    disabled={true}
                    type="submit"
                    value="Login"
                />
            </CustomForm>
        </div>
    );
};
