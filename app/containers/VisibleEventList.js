import { connect } from 'react-redux'
import EventList from '../components/EventList'

const getVisibleEvents = (events, filter) => {
  switch (filter) {
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
