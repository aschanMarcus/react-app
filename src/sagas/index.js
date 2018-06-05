import {take, call, fork, select} from 'redux-saga/effects'

// const getFirebase = (state) => state

export function* authorize () {
  while (true) {
    const request = yield take('LOG_IN')
    const {email, password} = request.data
    const firebase = request.firebase

    // let firebase = yield select(getFirebase)
    yield call(firebase.login, {email, password})
  }
}

export function* logout () {
  while (true) {
    const request = yield take('LOG_OUT')
    const firebase = request.firebase

    yield call(firebase.logout)
  }
}

export default function* root () {
  yield fork(authorize)
  yield fork(logout)
}
