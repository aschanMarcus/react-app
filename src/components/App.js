import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Counter from './Counter'
import LogInForm from './LogIn'
import { logout } from '../actions'

const App = props => {
  const { firebase, auth, dispatch } = props
  return (
  <div className="grid-container">
    <div className="grid-x grid-padding-y grid-padding-x">
      <div className="cell">
        <h1>React app</h1>
      </div>
      <div className="cell">
        {
          !isLoaded(auth)
          ? <span>Loading...</span>
          : isEmpty(auth)
            ? <LogInForm />
            : <div>
                <Counter />
                <button
                  className="button"
                  // onClick={function() {
                  //   firebase.logout()
                  // }}
                  onClick={function() {
                    dispatch(logout(firebase))
                  }}
                >
                  Log out
                </button>
              </div>
        }
      </div>
    </div>
  </div>
  )
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(App)
