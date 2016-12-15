const event = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        name: action.name,
        description: action.description,
        dateBegin: action.dateBegin,
        dateEnd: action.dateEnd,
        photo: action.photo || '',
        tags: action.tags || [],
        food: action.food || false
      }
    default:
      return state
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        event(undefined, action)
      ]
    default:
      return state
  }
}

export default events
