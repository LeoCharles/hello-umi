import *  as usersService from 'services/users'

export default {
  namespace: 'users',
  state: {
    list: []
  },
  reducers: {
    initUser(state, {payload: users}) {
      return {
        list: users
      }
    }
  },
  effects: {
    *queryUsers(_, {call, put}) {
      const users = yield call(usersService.queryUsers)
      yield put({type: 'initUser', payload: users})
    }
  }
}