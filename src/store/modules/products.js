import { getAllProducts } from '@/api/shop'
const state = {
  allProducts: []
}

const getters = {

}

const mutations = {
  // 获取所有商品
  setProducts (state, { products }) {
    state.allProducts = products
  },
  // 加入购物车后减掉商品库存
  reduceInventory (state, { id }) {
    state.allProducts.forEach(item => {
      if (item.id === id) {
        item.inventory--
      }
    })
  }
}

const actions = {
  async getAllProducts ({ commit }) {
    const res = await getAllProducts()
    if (res) {
      commit({
        type: 'setProducts',
        products: res
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
