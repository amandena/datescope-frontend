import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import userReducer from './reducers/userReducer'
import currentUser from './reducers/currentUser'


import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  users: userReducer,
  currentUser
})

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
    ,
  document.getElementById('root')
)
