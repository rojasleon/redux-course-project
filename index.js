// Start todo
{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn redux',
    complete: false
  }
}

{
  type: 'REMOVE_TODO',
  id: 0
}

{
  type: 'TOGGLE_TODO',
  id: 0
}
// end todo

// start goal
{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Learn GraphQl'
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0
}
// end goal

/*
  Characteristics of a Pure Function.
  1. They always return the same result if the same arguments are passed in.
  2. They depend only on the arguments passed into them.
  3. Never produce any side effects.
*/

function todos (state = [], action) {
  if(action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }
  return state
}

function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.concat([listener])
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState,
    subscribe
  }
}
