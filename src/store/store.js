// 引入vue
import Vue from 'vue'
// 全局引入Vuex
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import mutations from './actions'
// import mutations from './actions'

// 全局引入cooke方法类
import cookie from '../../static/js/cookie'

// 全局注册Vuex
Vue.use(Vuex)

// 要管理的状态
const userInfo = {
  name: cookie.getCookie('name') || '',
  token: cookie.getCookie('token') || ''
}
const goodsList = {
  totalPrice: '',
  goods_list: []
}
const state = {
  userInfo,
  goodsList
}

// 向外暴露store对象
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
