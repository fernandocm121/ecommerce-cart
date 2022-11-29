<script setup>
const route = useRoute()

const id = route.params.id

console.log('id', id)
const axios = useAxios()

const product = ref()

onMounted(async () => {
  const { data } = await axios(`/products/${id}`, { method: 'get' });

  console.log('data', data)

  product.value = data
})
</script>

<template>
<div 
  un-flex="~ row wrap"
  un-justify-center
  un-mb-md
>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>

  <h2 un-text-2xl>{{ product?.name }}</h2>
</div>
</template>

<route lang="yaml">
alias: /produto/:id
meta:
  title: Produto
</route>