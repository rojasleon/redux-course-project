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
