import calendarAPI from '../api/calendarAPI'

export const toggleFood = (toggle) => {
  return {
    type: 'TOGGLE_FOOD',
    toggle
  }
}

export const loadEvents = () => {
  return function (dispatch) {
    return calendarAPI.getAllEvents().then((events) => {
      dispatch(loadEventsSuccess(events))
    }).catch((error) => {
      throw error
    })
  }
}

export const loadEventsSuccess = (events) => {
  return {
    type: 'LOAD_EVENTS_SUCCESS',
    events
  }
}

export const createNewEvent = (event) => {
  return function (dispatch) {
    return calendarAPI.createNewEvent(event).then((response) => {
      // Pass the new event and its ID from the server to the next action
      dispatch(createNewEventSuccess(event, response._id))
    }).catch((error) => {
      throw error
    })
  }
}

export const createNewEventSuccess = (event, newId) => {
  return {
    // Insert the newly created event into the local state
    type: 'CREATE_NEW_EVENT_SUCCESS',
    _id: newId,
    name: event.name,
    dateBegin: event.dateBegin,
    dateEnd: event.dateEnd,
    description: event.description,
    tags: event.tags || [],
    photo: event.photo || '',
    food: event.food || false
  }
}

export const deleteEvent = (id) => {
  return function (dispatch) {
    return calendarAPI.deleteEvent(id).then((response) => {
      dispatch(deleteEventSuccess(id))
    }).catch((error) => {
      throw error
    })
  }
}

export const deleteEventSuccess = (id) => {
  return {
    type: 'DELETE_EVENT_SUCCESS',
    id
  }
}
