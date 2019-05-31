export default {
  cartList: state => state.cart.cartList,
  totalPrice: state => {
    return state.cart.cartList.reduce((total, ele) => {
      return total + ele.price * ele.num
    }, 0)
  }
}
