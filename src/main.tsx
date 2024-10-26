import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

const container = document.getElementById('root')

createRoot(container!).render(
	<StrictMode>
		<BrowserRouter basename='/'>
			<App />
		</BrowserRouter>
	</StrictMode>
);
