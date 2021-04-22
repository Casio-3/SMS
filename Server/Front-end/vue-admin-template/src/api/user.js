import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/api/user/info/update',
    method: 'post',
    data
  })
}

export function updateUserPassword(data) {
  return request({
    url: '/api/user/info/updatePassword',
    method: 'post',
    data
  })
}
