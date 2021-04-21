import request from '@/utils/request'

export function listClazz() {
  return request({
    url: '/api/clazz/list',
    method: 'get'
  })
}

export function updateClazz(data) {
  return request({
    url: '/api/clazz/update',
    method: 'post',
    data
  })
}

export function deleteClazz(id) {
  return request({
    url: '/api/clazz/delete/' + id,
    method: 'post'
  })
}

export function addClazz(data) {
  return request({
    url: '/api/clazz/add/',
    method: 'post',
    data
  })
}

export function getGrades() {
  return request({
    url: '/api/clazz/grades',
    method: 'get'
  })
}

export function getClazzs(grade) {
  return request({
    url: '/api/clazz/api/clazzs?grade=' + grade,
    method: 'get'
  })
}
