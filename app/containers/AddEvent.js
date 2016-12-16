import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { createNewEvent } from '../actions'
import AddEventForm from '../components/AddEventForm'

const AddEvent = ({ dispatch }) => {
  return (
    <div className='AddEvent'>
      <AddEventForm onSubmit={(values) => {
        dispatch(createNewEvent(
          values.name,
          values.dateBegin,
          values.dateEnd,
          values.description,
          values.tags.split(','),
          values.photo,
          values.food
        ))
        dispatch(reset('AddEventForm'))
      }} />
    </div>
  )
}

export default connect()(AddEvent)
