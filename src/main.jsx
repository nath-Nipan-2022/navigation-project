import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavigationProvider } from "./context/navigation";
import { AccordionContextProvider } from "./context/accordionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NavigationProvider>
			<AccordionContextProvider>
				<App />
			</AccordionContextProvider>
		</NavigationProvider>
	</React.StrictMode>
);
