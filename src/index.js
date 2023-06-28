import React from 'react';
import {createRoot} from 'react-dom/client';
import MyApp from "./MyApp";
import App from "./App";
import index from "./index.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<MyApp/>
		
		<App/>
	</React.StrictMode>
	)