const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    // id: '@id',
    // title: '@sentence(10, 20)',
    // 'status|1': ['published', 'draft', 'deleted'],
    // author: 'name',
    // display_time: '@datetime',
    // pageviews: '@integer(300, 5000)'
    id: "@id",
    member: "789", 
    name: "天机", 
    age: "12", 
    gender: "56",
    grade: "78", 
    class: "687", 
    homeaddress: "好耶"
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
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
