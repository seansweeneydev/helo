const initialState = {
  username: '',
  picture: '',
  userId: 0
}

const USER_UPDATE = 'USER_UPDATE'
const LOGOUT = 'LOGOUT'

export function userUpdate(user) {
  return {
    type: USER_UPDATE,
    payload: user
  }
}

export function logout() {
  return{
    type: LOGOUT
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case USER_UPDATE:
      return { ...state, username: payload.username, picture: payload.picture, userId: payload.id }
    case LOGOUT:
      return initialState
    default: 
    return state
  }
}