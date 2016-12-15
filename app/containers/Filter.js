import React from 'react'
import { connect } from 'react-redux'
import FilterForm from '../components/FilterForm'
import { toggleFood } from '../actions'

const Filter = ({ dispatch }) => {
  return (
    <div className='Filter'>
      <FilterForm onSubmit={(values) => {
        dispatch(toggleFood(values.foodToggle))
      }} />
    </div>
  )
}

export default connect()(Filter)
