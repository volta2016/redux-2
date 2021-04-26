//al reducer lo que le llega es el state una acción, y al final
//lo que tiene que retornar o expulsar es un newState
//es tomar algo de entrada y convertilo en otra cosa
//toma tienes esta estado tambíen este esta acción(evento) dime cual es el nuevo
//estado de mi aplicación.
//Es una maquina de generar estados > el reducer
//const reducer = (state, action) => newState

const counterReducer = (state, action) => {
	const { type } = action;
	if (type === "@counter/incremented") {
		return state + 1;
	}

	if (type === "@counter/decremented") {
		return state - 1;
	}
};

//el state de nuestra app puede ser un [], {} un numero ...etc
//normalmente las acciones son en realidad objetos.
const actionIncremented = {
	type: "@counter/incremented",
};

const actionDecremented = {
	type: "@counter/decremented",
};

counterReducer(0, actionIncremented);
counterReducer(1, actionDecremented);

//incrementar puede ser una acción pero como se definen las acciones
//que son estos eventos que le podemos decir a redux que han ocurrido.
//y como se lo indicamos.
//Normalmente la acciones son objetos
//> Las action son los eventos que han ocurrido y les tenemos que decir
//ha ocurrido este evento(action) y a partir de este evento, tienes
//que cambiar algo en el stado global de tu App. Ahora al utilizar esta acción
//Que es lo que nos esperariamos de nuestros reducer.
//Le decimos mira este es el state pero quiero que incrementes, que es lo
//lo que deberia ocurrir. Ahora ya comienzan a jugar entre si 2 palabras "1 los reducer
//y otra las acciones"
//El reducer le dice bueno yo soy la maquina entonces dime lo que ha pasado
//Que se a incrementado el contador voy hacer algo al respecto.
//¿como lo hace? >
//una vez tengamos el counterReducer nostros tenemos la action
//vamos a ver que tipo de acción ha llegado y si el tipo de action que ha //llegado es justamente la de aqui @counter/incremented
//obviamente tenemos otras acciones
//cuando llamamos counterReducer(1, actionDecremented)  el 1 debería ser 0
//pero que pasa aquí que todavia en el reducer no entiende > este evento
