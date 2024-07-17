import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ProductItem {
  name: string
  price: number
  quantity: number
  thumbnail: string
}
export const useProductsStore = defineStore('products', () => {
  const productList = ref<ProductItem[]>([])
  const totalItems = computed(() => {
    let sum = 0
    productList.value.forEach((item) => (sum += item.quantity))
    console.log(sum)

    return sum
  })

  // helper function
  const findItemByName = (name: string) => {
    // finds item and return the index of item
    const index = productList.value.findIndex((item) => item.name == name)
    return index
  }

  const addToCart = (product: ProductItem) => {
    productList.value.push(product)
  }
  const increment = (name: string) => {
    // function that increments the num of items in cart
    // finds the product
    const product = productList.value.find((item) => item.name == name)
    if (product) {
      product.quantity += 1
    }
  }

  const decrement = (name: string) => {
    // function that decrement the num of items in cart
    // finds the product
    const product = productList.value.find((item) => item.name == name)
    const index = productList.value.findIndex((item) => item.name == name)
    if (product) {
      // checking for last item so it removes
      // it entirely from the array
      if (product.quantity == 1) {
        productList.value.splice(index, 1)
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
      productList.value.splice(itemIndex, 1)
    }
  }

  return { addToCart, increment, productList, decrement, totalItems, removeFromCart }
})
