// reducer
const counter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

//  UI
const Counter = ({ value, onIncrement, onDecrement }) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

// call redux
const { createStore } = Redux;

// create store
const store = createStore(counter);

// method render react and dispatcher
const render = () => {
	ReactDOM.render(
		<Counter
			value={store.getState()} //get state
			onIncrement={() =>
				store.dispatch({
					type: "INCREMENT",
				})
			}
			onDecrement={() =>
				store.dispatch({
					type: "DECREMENT",
				})
			}
		/>,
		document.getElementById("root")
	);
};

// uddate state
store.subscribe(render);

// call function
render();
