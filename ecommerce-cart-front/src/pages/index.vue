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
    un-grid="~ cols-2 sm:cols-3 md:cols-4"
  >
    <div
      v-for="(product, index) in products"
      :key="`product-${index}`"
      un-m-md
    >
      <ProductItem
        :title="product.name"
        :price="product.price"
        :src="product.src"
      />
    </div>
  </div>
</div>
</template>
