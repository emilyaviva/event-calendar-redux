import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'

let AddEvent = ({ dispatch }) => {
  return (
    <div className='AddEvent'>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addEvent())
      }}>
        <input placeholder={'Event Name'} type='text' />
        <input placeholder={'Event Description'} type='text' />
        <input placeholder={'Start Date/Time'} type='text' />
        <input placeholder={'End Date/Time'} type='text' />
        <input placeholder={'Tags'} type='text' />
        <input placeholder={'Photo'} type='text' />
        <input type='submit' value='Add Event' />
      </form>
    </div>
  )
}

AddEvent = connect()(AddEvent)

export default AddEvent
