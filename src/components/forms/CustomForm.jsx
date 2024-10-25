export const CustomForm = ({ children, submitHandler }) => {
    return <form onSubmit={submitHandler}>{children}</form>;
};
