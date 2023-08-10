import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import mesh from "./assets/mesh-gradient (1).png";
import CounterPage from "./pages/CounterPage";
import Header from "./components/Header";
import SignupPage from "./pages/SignupPage";

const App = () => {
	// If you want which accordion is opened then: use a different state managing tool like 'context api' or 'Redux'.
	return (
		<>
			<Sidebar />
			<main className=" ml-36 p-4 h-screen bg-slate-100">
				<Header />
				<Route path="/">
					<DropdownPage />
				</Route>
				<Route path="/accordion">
					<AccordionPage />
				</Route>
				<Route path="/buttons">
					<ButtonPage />
				</Route>
				<Route path="/modal">
					<ModalPage />
				</Route>
				<Route path="/table">
					<TablePage />
				</Route>
				<Route path="/counter">
					<CounterPage />
				</Route>
				<Route path="/sign_up">
					<SignupPage />
				</Route>
			</main>
		</>
	);
};

export default App;
