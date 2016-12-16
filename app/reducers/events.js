const event = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_NEW_EVENT_SUCCESS':
      return {
        _id: action._id || 1,
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
    case 'LOAD_EVENTS_SUCCESS':
      return action.events
    case 'CREATE_NEW_EVENT_SUCCESS':
      // Creating a new event updates the local store of events, thus
      // avoiding having to run a second Ajax request to get all events.
      return [
        ...state,
        event(undefined, action)
      ]
    default:
      return state
  }
}

export default events
