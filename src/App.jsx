import { LoginForm } from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import { Table } from "./components/Table";

import "./App.css";

//TODO extract logic to follow best practices for separation of concerns
//TODO check folder structure
//TODO update readme with the nessecery information
//TODO maybe add typescript for type checking
//TODO improve css and overall design of the application
const App = () => {
    return (
        <Routes>
            <Route path="/" Component={LoginForm} />
            <Route path="/table" Component={Table} />
        </Routes>
    );
};

export default App;
