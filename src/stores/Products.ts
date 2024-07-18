import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export interface ProductItem {
  name: string
  price: number
  quantity: number
  thumbnail: string
}
export const useProductsStore = defineStore('products', () => {
  const state = reactive<{ productList: ProductItem[] }>({ productList: [] })
  const totalItems = computed(() => {
    let sum = 0
    state.productList.forEach((item) => (sum += item.quantity))
    console.log(sum)

    return sum
  })

  const showModal = reactive({ show: false })
  const toggleModal = () => (showModal.show = !showModal.show)

  // helper function
  const findItemByName = (name: string) => {
    // finds item and return the index of item
    const index = state.productList.findIndex((item) => item.name == name)
    return index
  }

  const addToCart = (product: ProductItem) => {
    state.productList.push(product)
  }
  const increment = (name: string) => {
    // function that increments the num of items in cart
    // finds the product
    const product = state.productList.find((item) => item.name == name)
    if (product) {
      product.quantity += 1
    }
  }

  const decrement = (name: string) => {
    // function that decrement the num of items in cart
    // finds the product
    const product = state.productList.find((item) => item.name == name)
    const index = state.productList.findIndex((item) => item.name == name)
    if (product) {
      // checking for last item so it removes
      // it entirely from the array
      if (product.quantity == 1) {
        state.productList.splice(index, 1)
      } else {
        product.quantity -= 1
      }
    }
  }

  const removeFromCart = (name: string) => {
    const itemIndex = findItemByName(name)
    if (itemIndex === -1) {
      console.warn('This item is not in the cart')
    } else {
      // remove entire item from cart
      state.productList.splice(itemIndex, 1)
    }
  }

  const resetCart = () => {
    showModal.show = false
    state.productList.length = 0
  }

  return {
    addToCart,
    increment,
    state,
    showModal,
    toggleModal,
    decrement,
    totalItems,
    removeFromCart,
    resetCart
  }
})
