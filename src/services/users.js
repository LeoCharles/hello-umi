import request from '../util/request'

export function queryUsers() {
  return request('/api/users?_page=1&_limit=5')
}