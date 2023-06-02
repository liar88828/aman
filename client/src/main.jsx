import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import { HomeScreen } from "./screen/HomeScreen.jsx";
import { LoginScreen } from "./screen/LoginScreen.jsx";
import { RegisterScreen } from "./screen/RegisterScreen.jsx";

const router = createBrowserRouter(
		createRoutesFromElements(
				<Route path='/' element={ <App/> }>
					<Route index={ true } path='/' element={ <HomeScreen/> }/>
					<Route path='/login' element={ <LoginScreen/> }/>
					<Route path='/register' element={ <RegisterScreen/> }/>
					{/*<Route path='' element={<PrivateRoute />}>*/ }
					{/*	<Route path='/profile' element={<ProfileScreen />} />*/ }
					{/*</Route>*/ }
				</Route>
		)
);
ReactDOM.createRoot(document.getElementById("root")).render(
		<React.StrictMode>
			<RouterProvider router={ router }/>
		</React.StrictMode>,
);
