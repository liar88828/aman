import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../../App.jsx";
import {HomeScreen} from "../../screen/HomeScreen.jsx";
import {LoginScreen} from "../../screen/LoginScreen.jsx";
import {RegisterScreen} from "../../screen/RegisterScreen.jsx";
import React from "react";
import {ProfileScreen} from "../../screen/ProfileScreen.jsx";
import {PrivateRoute} from "../../screen/privateRoute.jsx";

export const router = createBrowserRouter(
		createRoutesFromElements(
				<Route path='/' element={<App/>}>
					<Route index={true} path='/' element={<HomeScreen/>}/>
					<Route path='/login' element={<LoginScreen/>}/>
					<Route path='/register' element={<RegisterScreen/>}/>
					{/*---------- private Route -----------*/}
					<Route path='' element={<PrivateRoute/>}>
						<Route path='/profile' element={<ProfileScreen/>}/>
					</Route>
				</Route>
		)
);