const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    // id: '@id',
    // title: '@sentence(10, 20)',
    // 'status|1': ['published', 'draft', 'deleted'],
    // author: 'name',
    // display_time: '@datetime',
    // pageviews: '@integer(300, 5000)'
    id: '@id',
    member: '@integer(2020090900000,2020091300000)',
    name: 'ikun',
    age: '@integer(17,19)',
    gender: '@integer(0,1)',
    grade: '@integer(1,4)',
    clazz: '@integer(1,22)',
    homeaddress: '盲生，你发现了华点🥰'
  }]
})

module.exports = [
  {
    url: '/api/student/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
