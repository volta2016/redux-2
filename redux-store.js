const reducer = (state, action ) => satate


const counterReducer = (state, action) => {
  const {type} = action
  
  if(action === "@counter/incremented") {
    return state + 1
  }
  if(action === "@counter/decremented") {
    return state - 1  
  }
  if (action === "@counter/reset") {
    return 0 
  }
}

const actionIncremented = {
  type: "@counter/incremented"
}

const actionDecremented = {
  type: "@counter/decremented"
}

const actionReset = {
  type: "@counter/reset"
}
counterReducer(0, actionIncremented)
