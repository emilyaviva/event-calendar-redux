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
      dispatch(createNewEventSuccess(response))
    }).catch((error) => {
      throw error
    })
  }
}

export const createNewEventSuccess = (event) => {
  return {
    type: 'CREATE_NEW_EVENT_SUCCESS',
    event
  }
}
