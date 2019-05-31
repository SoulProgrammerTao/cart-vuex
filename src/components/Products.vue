<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="(item, index) in allProducts" :key="index" >{{item.title}} - {{item.price}}
        <br>
        <br>
        <button @click="addProducts(item)" :disabled="item.inventory === 0">add to cart</button>
        <hr>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'products',
  data: function () {
    return {}
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    ...mapActions('products', ['getAllProducts']), // 获取所有产品数据
    ...mapMutations('products', ['reduceInventory']), // 减少库存
    ...mapMutations('cart', ['addCartList', 'increaseProductsNum']),
    addProducts (product) {
      console.log(this.cartList)
      if (product.inventory) {
        if (this.cartList.find(item => item.id === product.id)) { // 如果购物车有改商品，则数量加1
          this.increaseProductsNum({ id: product.id })
        } else { // 没有该商品则将商品添加至购物车列表
          this.addCartList(product)
        }
        this.reduceInventory({ id: product.id })
      }
    }
  },
  computed: {
    ...mapState('products', ['allProducts']),
    ...mapState('cart', ['cartList'])
  }
}
</script>
<style scoped>
</style>
