<script setup>
const products = [
  {
    imgProps: {
      src: 'https://i.imgur.com/R7QIQCx.jpeg',
    },
    quantity: 14,
    title: 'Blusa da Nike masculina',
    price: 120.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/KdRBkvx.jpeg',
    },
    quantity: 7,
    title: 'Blusa da Nike feminina',
    price: 120.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/2WVpX9W.jpeg',
    },
    quantity: 9,
    title: 'Blusa da Nike basica',
    price: 130.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/PcUUGFi.png',
    },
    quantity: 5,
    title: 'Camiseta Nike Sportswear Essential Feminina',
    price: 150.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/sTCHDmx.jpeg',
    },
    quantity: 16,
    title: 'Blusa da Nike branca',
    price: 150.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/xqTq6zn.jpeg',
    },
    quantity: 3,
    title: 'Jaqueta da Nike',
    price: 230.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/yfydkOY.jpeg',
    },
    quantity: 5,
    title: 'Jaqueta-Nike-Sportswear-Windrunner',
    price: 450.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/LpUeRYi.jpeg',
    },
    quantity: 22,
    title: 'Agasalho Nike',
    price: 260.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/80UYdgw.jpeg',
    },
    quantity: 17,
    title: 'blusa feminina Nike',
    price: 150.00,
  },
  {
    imgProps: {
      src: 'https://i.imgur.com/KdRBkvx.jpeg',
    },
    quantity: 10,
    title: 'Camisa Nike Algodão',
    price: 130.00,
  },
]
</script>

<template>
<div 
  un-flex
  un-justify-center
>
  <div 
    un-grid="~ cols-5 gap-4"
    un-mt-lg
    un-w-col-8
  >
    <ProductItem 
      v-for="(product, index) in products"
      :img-props="product.imgProps"
      :key="`product-${index}`"
      :title="product.title"
      :price="product.price"
      un-flex="~ col"
      un-p-md
    />
  </div>
</div>
</template>
