import uuid from 'uuid'
import calendarAPI from '../api/calendarAPI'

export const addEvent = (name, dateBegin, dateEnd, description, tags, photo, food) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    name,
    dateBegin,
    dateEnd,
    description,
    tags,
    photo,
    food
  }
}

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
