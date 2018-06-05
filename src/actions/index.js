export const increment = () => ({
  type: 'INCREMENT'
})

export const authorize = (data, firebase) => ({
  type: 'LOG_IN',
  data,
  firebase
})

export const logout = (firebase) => ({
  type: 'LOG_OUT',
  firebase
})
