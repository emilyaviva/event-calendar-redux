import { connect } from 'react-redux'
import EventList from '../components/EventList'

const getVisibleEvents = (events, filter) => {
  switch (filter.showOnlyFood) {
    case true:
      return events.filter((event) => event.food)
    case false:
      return events
    default:
      return events
  }
}

const mapStateToProps = (state) => {
  return {
    events: getVisibleEvents(state.events, state.visibilityFilter)
  }
}

const VisibleEventList = connect(mapStateToProps)(EventList)

export default VisibleEventList
