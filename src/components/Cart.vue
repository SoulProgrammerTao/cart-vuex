<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="item in cartList" :key="item.id">
        {{item.title}} - {{item.price}} * {{item.num}}
      </li>
    </ul>
    <p>total: {{totalPrice}}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cart',
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters(['cartList', 'totalPrice'])
  }
}
</script>
<style scoped>
</style>
