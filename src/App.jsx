import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import { Table } from "./components/Table";

const App = () => {
    return (
        <Routes>
            <Route path="/" Component={LoginForm} />
            <Route path="/table" Component={Table} />
        </Routes>
    );
};

export default App;
