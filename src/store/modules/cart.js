const state = {
  cartList: [] // 购物车商品列表
}

const getters = {

}

const mutations = {
  // 添加产品种类
  addCartList (state, products) {
    state.cartList.push({ ...products, num: 1 })
  },
  // 某个商品数量加1
  increaseProductsNum (state, payload) {
    state.cartList.forEach(item => {
      if (item.id === payload.id) {
        item.num++
      }
    })
  }

}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
