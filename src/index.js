import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import { firebase as firebaseConfig } from './config'
import rootReducer from './reducers'
import rootSaga from './sagas'
import App from './components/App'

import 'foundation-sites/dist/css/foundation.css'

firebase.initializeApp(firebaseConfig)

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, {userProfile: 'users'})
)(createStore)

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
