// const toggleTodo = (todo) => {
// 	return {
// 		id: todo.id,
// 		text: todo.text,
// 		completed: !todo.completed,
// 	};
// 	//return copy original object
// };

// object assing method
// const toggleTodo = (todo) => {
// 	return Object.assign({}, todo, {
// 		completed: !todo.completed, //props copia del object
// 	});
// }; //look at the property inside the object

// con spread

const toggleTodo = (todo) => {
	return {
		...todo,
		completed: !todo.completed, //props copia del object
	};
}; //look at the property inside the object

const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: "Learn Redux",
		completed: false,
	};
	const todoAfter = {
		id: 0,
		text: "Learn Redux",
		completed: true,
	};

	deepFreeze(todoBefore);

	expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo();
console.log("All test passed" || displayInPreview("All tests passed.")); // pasar pero con deepfreeze no por congela

// display in plunker preview
function displayInPreview(string) {
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode(string);
	newDiv.appendChild(newContent);
	document.body.appendChild(newDiv);
}

// Clonando un objeto

/* Sintaxis
Object.assign(objetivo, ...fuentes)
Parámetros
objetivo
El objeto destino.
fuentes
Los objetos origen.


let obj = { a: 1 };
let copy = Object.assign({}, obj);
console.log(copy);*/ // { a: 1 }
