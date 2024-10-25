export const CustomForm = ({ children, submitHandler }) => {
    return (
        <form onSubmit={submitHandler}>
            {children}

            <button className="login-button" disabled type="submit">
                Login
            </button>
        </form>
    );
};

/* <form onSubmit={submitHandler}>
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
</form> */
