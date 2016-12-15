import React from 'react'
import Filter from '../containers/Filter'
import AddEvent from '../containers/AddEvent'
import VisibleEventList from '../containers/VisibleEventList'

const App = () =>
  <div>
    <Filter />
    <AddEvent />
    <VisibleEventList />
  </div>

export default App
