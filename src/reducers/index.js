import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase'
import counter from './counter'

export default combineReducers({
  form: reduxFormReducer,
  firebase: firebaseReducer,
  counter: counter
})
