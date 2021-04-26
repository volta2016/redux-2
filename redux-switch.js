//al reducer lo que le llega es el state una acción, y al final
//lo que tiene que retornar o expulsar es un newState
//es tomar algo de entrada y convertilo en otra cosa
//toma tienes esta estado tambíen este esta acción(evento) dime cual es el nuevo
//estado de mi aplicación.
//Es una maquina de generar estados > el reducer
//const reducer = (state, action) => newState

const counterReducer = (state, action) => {
	switch (action.type) {
		case "@counter/incremented":
			return state + 1;
		case "@counter/decremented":
			return state - 1;
		case "@counter/reset":
			return 0;
	}
};

//el state de nuestra app puede ser un [], {} un numero ...etc
//normalmente es un objeto.
const actionIncremented = {
	type: "@counter/incremented",
};

const actionDecremented = {
	type: "@counter/decremented",
};

const actionReset = {
	type: "@counter/reset",
};

//newState
counterReducer(0, actionIncremented);
counterReducer(1, actionDecremented);
counterReducer(3, actionReset);

/*esto lo podemos llevar a un nivel mas aya ya que tenemos el newState se lo podemos pasar como parametro, asi lo podemos volver a reutilizar, no lo vamos a ver en nuestra app así, no se usa directamente el reducer  pero en este caso nos va ayudar comprobar que funciona funciona. IMPORTANTE siempre te devuelve un nuevo estado. Veras muchas veces que los reducer no se suelen trabajar con if() lo que se suele utilizar es un switch. Este sería el siwtch tipoco de un reducer de que dependiendo de que Evento le ha llegado, la action va a gestionar su estado de una forma u otra. Hasta aquí todo bien tenemos nuestras
acciones tenemos nuestros reducer Nunca debes utilizar un reducer así si no más que para Testiar 


*/
