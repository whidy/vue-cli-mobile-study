import Vue from 'vue'
import axios from 'axios'
const Mock = require('mockjs')
var MockAdapter = require('axios-mock-adapter')
const instance = axios.create({
  baseURL: '/',
  method: 'get',
  timeout: 10000
})
Object.defineProperty(Vue.prototype, '$ajax', { value: instance })
var mock = new MockAdapter(instance)

mock.onGet('/users').reply(
  200,
  Mock.mock({
    'list|1-10': [
      {
        'id|+1': 1,
        userName: '@cname()'
      }
    ]
  })
)
mock.onGet('/user').reply(200, {
  user: 'whidy'
})
