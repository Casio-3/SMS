import request from '@/utils/request'

export function listStudent(params) {
  return request({
    url: '/api/student/list',
    method: 'get',
    params
  })
}

export function addStudent(data) {
  return request({
    url: '/api/student/add',
    method: 'post',
    data
  })
}

export function updateStudent(data) {
  return request({
    url: '/api/student/update',
    method: 'post',
    data
  })
}

export function deleteStudent(id) {
  return request({
    url: '/api/student/delete/' + id,
    method: 'post'
  })
}

export function searchStudent(data) {
  return request({
    url: '/api/student/search',
    method: 'post',
    data
  })
}
