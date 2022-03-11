const cartCounter = ref(0)

export default function() {
  function updateCart() {
    cartCounter.value += 1
  }

  return {
    cartCounter,
    updateCart
  }
}
