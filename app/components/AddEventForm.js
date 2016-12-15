import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddEventForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Event Name</label>
      <div>
        <Field name='name' component='input' type='text' placeholder='Event Name' />
      </div>
    </div>
    <div>
      <label>Event Description</label>
      <div>
        <Field name='description' component='textarea' type='text' placeholder='Description' />
      </div>
    </div>
    <div>
      <label>Start Date/Time</label>
      <div>
        <Field name='dateBegin' component='input' type='text' placeholder='Date/Time Start' />
      </div>
    </div>
    <div>
      <label>End Date/Time</label>
      <div>
        <Field name='dateEnd' component='input' type='text' placeholder='Date/Time End' />
      </div>
    </div>
    <div>
      <label>Tags</label>
      <div>
        <Field name='tags' component='input' type='text' placeholder='Tags' />
      </div>
    </div>
    <div>
      <label>Photo</label>
      <div>
        <Field name='photo' component='input' type='text' placeholder='Photo' />
      </div>
    </div>
    <div>
      <label>Is Food Provided?</label>
      <Field name='food' component='input' type='checkbox' />
    </div>
    <input type='submit' value='Add Event' />
  </form>

export default reduxForm({
  form: 'AddEventForm'
})(AddEventForm)
