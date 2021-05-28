const addCounter = (list) => {
	list.push(0);
	return list;
};

// test

const testAddCounter = () => {
	listBefore = [];
	const listAfter = [0];

	// deep freeze
	// esto lo vas a congelar por tanto si
	// alguien intenta mutar este objeto me saca un error
	deepFreeze(listBefore); //error x mutar el orignal array

	expect(addCounter(listBefore)).toEqual(listAfter);
};

testAddCounter();
console.log("Al test passed");
