// const addCounter = (list) => {
// 	return list.concat(0); //concat no modifica al original array
// };

const addCounter = (list) => {
	return [...list, 0]; //concat no modifica al original array
};

const removeCounter = (list, index) => {
	list.splice(index, 1);
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

const testRemoveCounter = () => {
	const listBefore = [0, 10, 10];
	const listAfter = [0, 20];

	expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

testAddCounter();
console.log("Al test passed");
