import Vue from 'vue'
// 引入路由组件
import Router from 'vue-router'
// 引入路由需要的组件
import app from '../views/app/app'
import head from '../views/head/head'
import home from '../views/home/home'
import footer from '../views/footer/foot'
import list from '../views/list/list'
import index from '../views/index/index'
import loginHead from '../views/loginHead/loginHead'
import login from '../views/login/login'
import register from '../views/register/register'
import productDetail from '../views/productDetail/productDetail'
import shophead from '../views/head/shophead'
import member from '../views/member/member'
import order from '../views/member/order'
import orderDetail from '../views/member/orderDetail'
import receive from '../views/member/receive'
import userinfo from '../views/member/userinfo'
import collection from '../views/member/collection'
import message from '../views/member/message'
// 全局状态控制引入
import store from '../store/store'
import cart from '../views/cart/cart'
import cookie from '../../static/js/cookie'

// 注册路由
Vue.use(Router)
// 配置路由
var router = new Router({
  // // 使用history,可去掉ip的 #
  // mode: 'history',
  routes: [{
    path: '/app',
    component: app,
    children: [
      {
        path: 'login',
        name: 'login',
        components: {
          head: loginHead,
          content: login,
          footer: footer
        },
        meta: {
          title: '登录',
          need_log: false
        }
      },
      {
        path: 'register',
        name: 'register',
        components: {
          head: loginHead,
          content: register,
          footer: footer
        },
        meta: {
          title: '注册',
          need_log: false
        }
      },
      {
        path: 'home',
        components: {
          head: head,
          content: home,
          footer: footer,
          need_log: false
        },
        children: [
          {
            path: 'list/:id',
            name: 'list',
            component: list,
            meta: {
              title: '列表',
              need_log: false // 是否需要登陆
            }
          },
          {
            path: 'search/:keyword',
            name: 'search',
            component: list,
            meta: {
              title: '搜索',
              need_log: false
            }
          },
          {
            path: 'index',
            name: 'index',
            component: index,
            meta: {
              title: '首页',
              need_log: false
            }
          },
          {
            path: 'productDetail/:productId',
            name: 'productDetail',
            component: productDetail,
            meta: {
              title: '商品详情',
              need_log: false
            }
          },
          {
            path: 'member',
            component: member,
            children: [
              {
                path: 'order',
                name: 'order',
                component: order,
                meta: {
                  title: '我的订单',
                  need_log: true
                }
              },
              {
                path: 'orderDetail/:orderId',
                name: 'orderDetail',
                component: orderDetail,
                meta: {
                  title: '订单详情',
                  need_log: true
                }
              },
              {
                path: 'receive',
                name: 'receive',
                component: receive,
                meta: {
                  title: '收件人信息',
                  need_log: true
                }
              },
              {
                path: 'userinfo',
                name: 'userinfo',
                component: userinfo,
                meta: {
                  title: '用户信息',
                  need_log: true
                }
              },
              {
                path: 'collection',
                name: 'collection',
                component: collection,
                meta: {
                  title: '我的收藏',
                  need_log: true
                }
              },
              {
                path: 'message',
                name: 'message',
                component: message,
                meta: {
                  title: '我的留言',
                  need_log: true
                }
              },
              {
                path: '',
                redirect: true
              }
            ]
          }
        ]
      },
      {
        path: 'shoppingcart',
        components: {
          head: shophead,
          content: home,
          footer: footer
        },
        children: [
          {
            path: 'cart',
            name: 'cart',
            component: cart,
            meta: {
              title: '购物车',
              need_log: true
            }
          }
        ]
      }
    ]
  }]
})
// 进行路由判断
router.beforeEach((to, from, next) => {
  var nextPath = cookie.getCookie('nextPath')
  console.log(nextPath)
  if (nextPath === 'pay') {
    next({
      path: '/app/home/member/order' // 跳转到订单列表页
    })
  } else {
    if (to.meta.need_log) {
      if (!store.state.userInfo.token) {
        console.log('没有令牌的用户体哦啊转到登陆界面')
        next({
          path: '/app/login'
        })
      } else {
        console.log('有令牌的用户正常跳转', to)
        next()
      }
    } else {
      if (to.path === '/') {
        console.log('请求了根路由')
        next({
          path: '/app/home/index'
        })
      } else {
        console.log('无需登录正常跳转')
        next()
      }
    }
  }
})

// 修改网页标题
router.afterEach((to, from) => {
  document.title = to.matched[to.matched.length - 1].meta.title
})
// 抛出路由
export default router
