import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({ events }) =>
  <main className='EventList'>
    {events.map((event) =>
      <Event
        key={event._id}
        {...event}
      />
    )}
  </main>

const propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateBegin: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array,
    photo: PropTypes.string,
    food: PropTypes.bool
  }).isRequired).isRequired
}

export default Object.assign(EventList, { propTypes })
