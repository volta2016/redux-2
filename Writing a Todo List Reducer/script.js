const todo = (state = [], action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false,
				},
			];
		default:
			return state;
	}
};

const testAddTodo = () => {
	const stateBefore = [];
	const action = {
		type: "ADD_TODO",
		id: 0,
		text: "Learn Redux",
	};
	const stateAfter = [
		{
			id: 0,
			text: "Learn Redux",
			completed: false,
		},
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todo(stateBefore, action)).toEqual(stateAfter);
	//it fails because the reducer is not implemented yet. It's an empty function
};

testAddTodo();
console.log("All test passed");
