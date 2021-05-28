// const addCounter = (list) => {
// 	return list.concat(0); //concat no modifica al original array
// };

const addCounter = (list) => {
	return [...list, 0]; //concat no modifica al original array
};

const removeCounter = (list, index) => {
	return list.slice(0, index).concat(list.slice(index + 1));
};

// con spread
// const removeCounter = (list, index) => {
// 	return
// 		...list.slice(0, index)
// 		...(list.slice(index + 1));
// };

// const incrementedCounter = (list, index) => {
// 	list[index]++;
// 	return list;
// }; //modifica al original

// const incrementedCounter = (list, index) => {
// 	return list
// 		.slice(0, index)
// 		.concat([list[index] + 1])
// 		.concat(list.slice(index + 1));
// };

// puedes ocupar spread

const incrementedCounter = (list, index) => {
	return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};

// test

const testAddCounter = () => {
	listBefore = [];
	const listAfter = [0];

	// deep freeze
	// esto lo vas a congelar(impide mutar) por tanto si
	// alguien intenta mutar este objeto o array me saca un error
	deepFreeze(listBefore); //error x mutar el orignal array

	expect(addCounter(listBefore)).toEqual(listAfter);
};

const testRemoveCounter = () => {
	const listBefore = [0, 10, 10];
	const listAfter = [0, 20];

	expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

const testIncrementCounter = () => {
	const listBefore = [0, 10, 20];
	const listAfter = [0, 11, 20];

	deepFreeze(listBefore);

	expect(incrementedCounter(listBefore, 1)).toEqual(listAfter);
};

testAddCounter();
console.log("Al test passed");
