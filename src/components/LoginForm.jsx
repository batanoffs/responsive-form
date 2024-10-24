import { useState } from "react";
import { useNavigate } from "react-router-dom";

import data from "../users.json";
import styles from "./login.module.css";

//TODO implement responsive design to Login if needed
export const LoginForm = () => {
    const [formData, setFormData] = useState({
        user: "",
        password: "",
    });
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const formElement = e.target;
        const form = new FormData(formElement);

        if (!form) throw new Error("Form data is empty");

        const formEntries = Object.fromEntries(form);

        const { user, password } = formEntries;

        const isValidUser = data.users.find((u) => u.user === user);

        if (!isValidUser) {
            alert("User does not exist");
            return;
        }

        if (isValidUser.password !== password) {
            alert("Wrong password");
            return;
        }

        navigate("/table");
    };

    const handleEmptyFields = () => {
        const button = document.querySelector(".login-button");

        if (formData.user !== "" && formData.password !== "") {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    };

    const onChangeHandler = (e) => {
        const target = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (!target) throw new Error("target is null");

        setFormData((prev) => {
            if (target === "user") {
                return { ...prev, user: value };
            } else {
                return { ...prev, password: value };
            }
        });

        handleEmptyFields();
    };

    return (
        //TODO improve design
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="user"> User </label>
                    <input
                        id="user"
                        name="user"
                        value={formData.user}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={onChangeHandler}
                    />
                </div>
                <button className="login-button" disabled type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};
