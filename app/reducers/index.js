import { combineReducers } from 'redux'
import events from './events'
import visibilityFilter from './visibilityFilter'

const eventsCalendar = combineReducers({
  events,
  visibilityFilter
})

export default eventsCalendar
