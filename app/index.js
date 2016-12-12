import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import eventsCalendar from './reducers'
import App from './components/App'

const store = createStore(eventsCalendar, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(wrappedApp, document.getElementById('app'))
