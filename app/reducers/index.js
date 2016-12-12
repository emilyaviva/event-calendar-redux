import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import events from './events'
import visibilityFilter from './visibilityFilter'

const eventsCalendar = combineReducers({
  form: formReducer,
  events,
  visibilityFilter
})

export default eventsCalendar
