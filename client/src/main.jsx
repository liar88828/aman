import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store.js";
import { router } from "./lib/react-router-dom/router.jsx";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
		<React.StrictMode>
			<Provider store={ store }>
				<RouterProvider router={ router }/>
			</Provider>
		</React.StrictMode>,
);
