import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { firebaseConnect } from 'react-redux-firebase'
import { authorize } from '../actions'

const LogInForm = props => {
  const { error, handleSubmit, handleChange, submitting, firebase, dispatch } = props
  return (
    <form
      onSubmit={handleSubmit(function(values) {
        dispatch(authorize(values, firebase))
      })}
    >
      <div>
        <label>
          Email
          <Field
            id="email"
            name="email"
            component="input"
            onChange={handleChange}
            type="email"
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <Field
            id="password"
            name="password"
            component="input"
            onChange={handleChange}
            type="password"
          />
        </label>
      </div>
      {error && <strong>{error}</strong>}
      <div>
        <button className="button" type="submit" disabled={submitting}>Log In</button>
      </div>
    </form>
  )
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  reduxForm({form: 'login'})
)(LogInForm)
