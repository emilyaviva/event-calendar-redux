import React from 'react'
import { Field, reduxForm } from 'redux-form'

const FilterForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <label>
        Show only events where food is provided
        <Field type='checkbox' component='input' name='foodToggle' />
      </label>
    </div>
    <input type='submit' value='Filter' />
  </form>

export default reduxForm({
  form: 'FilterForm'
})(FilterForm)
