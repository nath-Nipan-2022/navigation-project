import Counter from "../components/Counter";

import React from "react";

const CounterPage = () => {
	return (
		<div>
			<h2 className="text-lg text-slate-600 p-4 font-semibold ">Counter #useReducer Page</h2>
			<Counter initialCount={10} />
		</div>
	);
};

export default CounterPage;
