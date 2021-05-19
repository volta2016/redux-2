import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case "@counter/actionincremented":
      return state + 1
    case "@counter/actiondecremented":
      return state - 1
    case "@counter/reset":
      return 0
    default:
      return state
  } 
};


const store = createStore(counterReducer)



const actionIncremented = {
  type: "@counter/actionincremented"
}

const actionDecremented = {
  type: "@counter/actiondecremented"
}

const actionReset = {
  type: "@counter/reset"
}

store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(actionIncremented);
store.dispatch(actionIncremented);
store.dispatch(actionDecremented)
store.getState()


