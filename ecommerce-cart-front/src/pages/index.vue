<script setup>
const axios = useAxios()

const products = ref()

onMounted(async () => {
  const { data } = await axios("/products/get", { method: 'get' });

  products.value = data
})
</script>

<template>
<div 
  un-flex="~ row wrap"
  un-justify-center
>
  <div 
    v-for="(product, index) in products"
    :key="`product-${index}`"
    un-w="288px"
    un-flex
    un-justify-center
    un-pos-relative
    un-my-xl
    un-mx-md
  >
    <ProductItem
      :title="product.name"
      :price="product.price"
      :src="product.src"
    />
  </div>
</div>
</template>
