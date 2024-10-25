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
