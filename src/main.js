import Vue from 'vue'
import Test from './test.vue'

let app = new Vue({
  el: '#app',
  render: h => h(Test)
})