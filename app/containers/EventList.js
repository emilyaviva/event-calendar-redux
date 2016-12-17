import React from 'react'
import { connect } from 'react-redux'
import Event from '../components/Event'
import { deleteEvent } from '../actions'

const EventList = ({ events, dispatch }) =>
  <main className='EventList'>
    {events.map((event) =>
      <Event
        key={event._id}
        handleDelete={() => dispatch(deleteEvent(event._id))}
        {...event}
      />
    )}
  </main>

export default connect()(EventList)
