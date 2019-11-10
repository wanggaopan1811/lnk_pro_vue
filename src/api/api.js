import axios from 'axios'

// let host = 'http://127.0.0.1:8000'
let host = ''

// 获取商品类别
// 一个参数直接写 ，两个参数需要加上 （） ，没有参数需要写上（）
export const getCategory = params => {
  if ('id' in params) {
    return axios.get(`${host}/categorys/${params.id}/`) // 有id的情况
  } else {
    return axios.get(`${host}/categorys/`, params)
  }
}

export const getCategory1 = params => {
  return axios.get(`${host}/category1/`, params)
}

// 获取热门搜索关键词
export const getHotSearch = params => {
  return axios.get(`${host}/hotsearchs/`, params)
}
// 获取当前位置
export const getCurrentLoc = params => {
  return axios.get(`${host}/currentLoc/`, params)
}
// 获取价格区间
export const getPriceRange = params => {
  return axios.get(`${host}/priceRange/`, params)
}

// 获取商品列表
export const getGoods = params => {
  return axios.get(`${host}/goods/`, {params: params})
}

// 获取轮播图
export const bannerGoods = () => {
  return axios.get(`${host}/getBanner/`)
}

// 获取商品类别信息
export const queryCategoryGoods = () => {
  return axios.get(`${host}/indexgoods/`)
}

// 登陆
export const login = params => {
  return axios.post(`${host}/login/`, params)
}

// 短信
export const getMessage = params => {
  return axios.post(`${host}/code/`, params)
}

// 注册users
export const register = params => {
  return axios.post(`${host}/users/`, params)
}

// 商品详情
export const getGoodsDetail = goodId => {
  return axios.get(`${host}/goods/${goodId}/`)
}

// 判断是否收藏
export const getFav = goodId => {
  return axios.get(`${host}/userfavs/${goodId}/`)
}

// 收藏
export const addFav = params => {
  return axios.post(`${host}/userfavs/`, params)
}

// 收藏
export const delFav = goodId => {
  return axios.delete(`${host}/userfavs/${goodId}/`)
}
// 加入购物车
export const addShopCart = params => {
  return axios.post(`${host}/shopcarts/`, params)
}
// 获取购物车商品
export const getShopCarts = () => {
  return axios.get(`${host}/shopcarts/`)
}

// 删除购物车的购物项
export const deleteShopCarts = (goodsId) => {
  return axios.delete(`${host}/shopcarts/${goodsId}/`)
}

// 更新购物车的购物信息
export const updateShopCarts = (goodsId, params) => {
  return axios.patch(`${host}/shopcarts/${goodsId}/`, params)
}

// 清空购物车
export const delAllShopCart = () => {
  return axios.delete(`${host}/shopcarts/`)
}

// 获取所有收货地址
export const getAddress = () => {
  return axios.get(`${host}/address/`)
}

// 修改收货地址
export const updateAddress = (addressId, params) => {
  return axios.patch(`${host}/address/${addressId}`, params)
}

// 删除收货地址
export const delAddress = addressId => {
  return axios.delete(`${host}/address/${addressId}`)
}

// 添加收货地址
export const addAddress = params => {
  return axios.post(`${host}/address/`, params)
}

// 添加订单
export const createOrder = params => {
  return axios.post(`${host}/orders/`, params)
}
// 获取订单
export const getOrder = () => {
  return axios.get(`${host}/orders/`)
}
// 获取订单详情
export const getOrderDetail = orderId => {
  return axios.get(`${host}/orders/${orderId}`)
}

// 删除订单
export const delOrder = orderId => {
  return axios.delete(`${host}/orders/${orderId}`)
}

// 获取用户信息
export const getUserDetails = () => {
  return axios.get(`${host}/usersss/1/`)
}

// 修改用户信息
export const updateUserInfo = (params) => {
  return axios.patch(`${host}/usersss/1/`, params)
}
// 获取收藏信息
export const getCollecion = () => {
  return axios.get(`${host}/userfavs/`)
}
// 删除收藏
export const delCollecion = orderId => {
  return axios.delete(`${host}/delCollecion/${orderId}/`)
}
// 普通函数里的this 相当于window对象，箭头函数没有自己的this 需要看自己的上一级的是什么。
// 箭头代替的格式
// var getCategory = function (params) {
// //   return -------
// // }
