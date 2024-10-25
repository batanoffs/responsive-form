import { Route, Routes } from "react-router-dom";

import { LoginPage, TablePage } from "./pages/index";

import "./App.css";

//TODO extract logic to follow best practices for separation of concerns
//TODO check folder structure
//TODO update readme with the nessecery information
//TODO maybe add typescript for type checking
//TODO improve css and overall design of the application

const App = () => {
    return (
        <Routes>
            <Route path="/" Component={LoginPage} />
            <Route path="/table" Component={TablePage} />
        </Routes>
    );
};

export default App;
