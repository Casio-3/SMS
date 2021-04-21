import request from '@/utils/request'

export function listTeacher() {
  return request({
    url: '/api/teacher/list',
    method: 'get'
  })
}

export function addTeacher(data) {
  return request({
    url: '/api/teacher/add',
    method: 'post',
    data
  })
}

export function updateTeacher(data) {
  return request({
    url: '/api/teacher/update',
    method: 'post',
    data
  })
}

export function deleteTeacher(id) {
  return request({
    url: '/api/teacher/delete/' + id,
    method: 'post'
  })
}

export function searchTeacher(data) {
  return request({
    url: '/api/teacher/search',
    method: 'post',
    data
  })
}
