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
  un-flex
  un-justify-center
>
  <div 
    un-grid="~ cols-2 sm:cols-3 md:cols-5 gap-4"
    un-mt-lg
    un-w-col-8
  >
    <ProductItem 
      v-for="(product, index) in products"
      un-flex="~ col"
      un-p-md
      :key="`product-${index}`"
      :title="product.name"
      :price="product.price"
      :src="product.src"
    />
  </div>
</div>
</template>
