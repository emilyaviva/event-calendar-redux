import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'
import AddEventForm from '../components/AddEventForm'

const AddEvent = ({ dispatch }) => {
  return (
    <div className='AddEvent'>
      <AddEventForm onSubmit={(values) => {
        dispatch(addEvent(
          values.name,
          values.dateBegin,
          values.dateEnd,
          values.description,
          [values.tags],
          values.photo
        ))
      }} />
    </div>
  )
}

export default connect()(AddEvent)
