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
  un-flex="~ row wrap col-2"
  un-justify-start
  un-mb-md
  un-w="80%"
  un-mx="10%"
>
  <div 
    v-for="(product, index) in products"
    :key="`product-${index}`"
    un-w="288px"
    un-pos-relative
    un-my-xl
    un-mx-md
  >
    <ProductItem
      :id="product._id"
      :title="product.name"
      :price="product.price"
      :src="product.src"
      />
  </div>
</div>
</template>
