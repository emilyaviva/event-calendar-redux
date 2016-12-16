import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { createNewEvent } from '../actions'
import AddEventForm from '../components/AddEventForm'

const AddEvent = ({ dispatch }) =>
  <div className='AddEvent'>
    <AddEventForm onSubmit={(values) => {
      dispatch(createNewEvent({
        name: values.name,
        dateBegin: values.dateBegin,
        dateEnd: values.dateEnd,
        description: values.description,
        tags: values.tags.split(','),
        photo: values.photo,
        food: values.food
      }))
      dispatch(reset('AddEventForm'))
    }} />
  </div>

export default connect()(AddEvent)
