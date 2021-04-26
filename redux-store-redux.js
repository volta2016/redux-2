import {createStore} from "redux"




const counterReducer = (state, action) => {
    switch(action.type) {
      case "@counter/incremented":
        return state + 1
      case "@counter/decremented":
        return state - 1
      case "@counter/reset":
        return 0
  }
}

const store = createStore(counterReducer) 


//el state de nuestra app puede ser un [], {} un numero ...etc
//normalmente es un objeto.
const actionIncremented = {
 type: "@counter/incremented"
}

const actionDecremented = {
 type: "@counter/decremented"
}

const actionReset = {
 type: "@counter/reset"
}

store.dispatch(actionIncremented)//a las acciones hay dispacharlas hay que enviarselas a la store
//a la store le vamos a enviar un evento, podemos pasar directamente
//


//newState 
//counterReducer(0, actionIncremented) 
//counterReducer(1, actionDecremented)
//counterReducer(3, actionReset) 

/*esto lo podemos llevar a un nivel mas aya ya que tenemos el newState se lo podemos pasar como parametro, asi lo podemos volver a reutilizar, no lo vamos a ver en nuestra app así, no se usa directamente el reducer  pero en este caso nos va ayudar comprobar que funciona funciona. IMPORTANTE siempre te devuelve un nuevo estado. Veras muchas veces que los reducer no se suelen trabajar con if() lo que se suele utilizar es un switch. Este sería el switch tipoco de un reducer de que dependiendo de que Evento le ha llegado, la action va a gestionar su estado de una forma u otra. Hasta aquí todo bien tenemos nuestras
acciones tenemos nuestros reducer Nunca debes utilizar un reducer así si no más que para Testiar 

La Store es un objeto que al final reune las actions y los reducers. Tiene diferentes responsabilidades:
Contener el estado de la aplicación
Permite leer el estado de la App
Permite actualizar el estado de la App

counterReducer(0, actionIncremented) en lugar de usar el reducer de esta forma esta forma va ser el Store la que tenga la responsibilidad de llamar el al reducer como tenga que llamarlo y no tengas que hacer tu nada de esto.
le dices toma Store esta es la acción que te estoy mandando, la Store dira.
yo llamo al reducer y  ya me arreglo. También poder suscribirte al Store
de forma de que cuando cambia el state saber cuando cambia y también desuscribirte a la Store

Vamos a traernos un createStore desde redux 
Una cosa que tenemos que hacer para crear la sotore es pasarle el reducer
que va utilizar esa Store counterReducer() y le vamos decir cual es la maquina
que tiene que usar para gestionar el State cuando le llueguen las acciones en nuestro caso es el counterReducer, ahora es la Store la que tiene esa responsabilidad, la que sabe de como tiene que actualizar el state 
entonces ya no tenemos que usar nada de esto estos counter reducer que estamos
haciendo aquí

counterReducer(0, actionIncremented) 
counterReducer(1, actionDecremented)
counterReducer(3, actionReset) 
estos couter reducer que estamos haciendo aquí, las acciones si que las necesitamos normalmente estan deparadas en otros archivos, esto lo podriamos hacer directamente, lo aplicamos en una const para que sea mas fácil de leer

*/




