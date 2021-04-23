const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    // id: '@id',
    // title: '@sentence(10, 20)',
    // 'status|1': ['published', 'draft', 'deleted'],
    // author: 'name',
    // display_time: '@datetime',
    // pageviews: '@integer(300, 5000)'
    'id|+1': 0,
    'member': '@integer(2017090909001,2020091203030)',
    'name': '@cname',
    'age|18-22': 20,
    'gender|1': [0, 1],
    'grade|1': ['大一', '大二', '大三', '大四'],
    'clazz': '@integer(1,22)',
    'homeaddress': '@county(true)'
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
