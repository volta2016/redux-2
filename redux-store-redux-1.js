import { createStore } from "redux";

// podemos pasar el state directamente
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "@counter/incremented":
			return state + 1;
		case "@counter/decremented":
			return state - 1;
		case "@counter/reset":
			return 0;
	}
};

const store = createStore(counterReducer);
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

//el subcribe es antes
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(actionIncremented);
//a las acciones hay dispacharlas hay que enviarselas a la store
store.dispatch(actionIncremented);
store.getState();

//a la store le vamos a enviar un evento, podemos pasar directamente
//lo podemos pasar directamente
//store.dispatch({type: "@counter/incremented"})

//newState
//counterReducer(0, actionIncremented)
//counterReducer(1, actionDecremented)
//counterReducer(3, actionReset)

/*Otra cosa que podemos hacer para no hacer el getState cada vez que hacemos el dispatch lo que podemos hacer en la store es suscribirte de forma que cada
vez que reciba un cambio pueda hacer un store.getState OJO: me suscribo después de hacer el dispatch. yo aquí lo que estoy haciendo es suscribirme cada vez 
que pueda al store y cada vez que detecta en un cambio en la store pues hago un getState() > Esto es interesante por que es lo que le va permitir actualizar 
la UI cada que encontremos un cambio en el state de forma que podeamos relfejar en algún sitio que ha cambiado el state. 

"Es una maquina de actualizar state lo que hace siempre es generar un nuevo state"
> tu le pasas el state y el action > siempre tiene que devolver un nuevo state, cambiar el state anterior es imposible ¿por qué? por que esto es un tipo primitivo
*/
