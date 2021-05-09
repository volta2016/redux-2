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

store.subscribe(() => {
	console.log(store.getState());
  document.body.innerHTML = store.getState();
});

store.dispatch(actionIncremented);
//a las acciones hay dispacharlas hay que enviarselas a la store
store.dispatch(actionIncremented);
store.getState()



