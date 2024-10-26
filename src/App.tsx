import { Route, Routes } from 'react-router-dom';

import { LoginPage, TablePage } from './pages/index';

import './App.css';

//TODO update readme with the nessecery information
//TODO improve css and overall design of the application

const App = () => {
	return (
		<Routes>
			<Route path='/' Component={LoginPage} />
			<Route path='/table' Component={TablePage} />
		</Routes>
	);
};

export default App;
