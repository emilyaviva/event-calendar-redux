import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import eventsCalendar from './reducers'
import App from './components/App'
import { loadEvents } from './actions'

// composeWithDevTools enables the Chrome Redux extension
// ReduxThunk enables actions that dispatch other actions
const store = createStore(
  eventsCalendar,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
)

// on app start, get all events that exist
store.dispatch(loadEvents())

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(wrappedApp, document.getElementById('app'))
