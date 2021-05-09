//const reducer = (state, action ) => satate


const counterReducer = (state, action) => {
  const {type} = action
  
  if(type === "@counter/incremented") {
    return state +1
  }
  if(type == "@counter/decremented") {
    return state - 1
  }
  
  if(type === "@counter/reset") {
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
counterReducer(1, actionDecremented)
counterReducer(120, actionReset)


