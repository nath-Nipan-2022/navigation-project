/* eslint-disable react/prop-types */
import React, { useReducer } from "react";
import { produce } from "immer";
import Button from "./Button";

// avoid typing mistakes we declare allcaps variables
const INCREAMENT_COUNT = "increament-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE = "change-value";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

// reducer function is called when we need to update states by calling dispatch function
const reducer = (state, action) => {
	// we are using immer library for mutating state
	const { count } = state;

	switch (action.type) {
		case INCREAMENT_COUNT:
			state.count = count + 1;
			return;
		case DECREMENT_COUNT:
			state.count = count - 1;
			return;
		case CHANGE_VALUE:
			state.valueToAdd = action.payload;
			return;
		case ADD_VALUE_TO_COUNT:
			state.count = count + state.valueToAdd;
			state.valueToAdd = 0;
			return;
		default:
			return;
	}
};

const Counter = ({ initialCount }) => {
	// const [count, setCount] = useState(initialCount);
	// const [valueToAdd, setValueToAdd] = useState(0);

	const [state, dispatch] = useReducer(produce(reducer), {
		count: initialCount,
		valueToAdd: 0,
	});

	console.log(state);
	const increament = () => {
		// setCount(count + 1);
		dispatch({
			type: INCREAMENT_COUNT,
		});
	};

	const decreament = () => {
		// setCount(count - 1);
		dispatch({
			type: DECREMENT_COUNT,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: ADD_VALUE_TO_COUNT,
		});
	};

	const handleChange = (e) => {
		const value = parseInt(e.target.value) || 0;
		// setValueToAdd(value);
		dispatch({
			type: CHANGE_VALUE,
			payload: value,
		});
	};
	return (
		<div className="p-8">
			<h2 className="text-lg">{"Count: " + state.count}</h2>
			<div className="mt-2 flex gap-4 items-center">
				<Button primary onClick={increament}>
					Increament
				</Button>
				<Button primary onClick={decreament}>
					Decreament
				</Button>
			</div>
			<form className="mt-2">
				<input
					onChange={handleChange}
					type="number"
					value={state.valueToAdd || ""}
					className="p-1 mb-2 rounded"
				/>
				<Button primary onClick={handleSubmit}>
					Add a lot!
				</Button>
			</form>
		</div>
	);
};

export default Counter;
