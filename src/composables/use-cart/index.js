const cartCounter = ref(0)

export default function() {
  function addCart() {
    cartCounter.value += 1
  }

  return {
    cartCounter,
    addCart
  }
}
