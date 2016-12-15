import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import eventsCalendar from './reducers'
import App from './components/App'
import { loadEvents } from './actions'

const store = createStore(
  eventsCalendar,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
)

store.dispatch(loadEvents())

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(wrappedApp, document.getElementById('app'))
