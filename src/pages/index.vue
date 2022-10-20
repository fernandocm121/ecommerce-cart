<script setup>
const products = [
  {
    imgProps: {
      src: 'https://imgnike-a.akamaihd.net/1300x1300/014600ID.jpg',
    },
    quantity: 12,
    title: 'Controle para PS5 sem Fio DualSense Sony',
    price: 400.00,
  },
  {
    imgProps: {
      src: 'https://a-static.mlcdn.com.br/618x463/xbox-series-s-2020-nova-geracao-512gb-ssd-1-controle-branco-microsoft-lancamento/magazineluiza/043083000/32fe1e8fc7e51793a5ec7f89abd77a9d.jpg'
    },
    quantity: 8,
    title: 'Xbox Series S 2020 Nova Geração 512GB SSD',
    price: 2500.00,
  },
  {
    imgProps: {
      src: 'https://a-static.mlcdn.com.br/618x463/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba1/kabum/135586/114e88d970f7af6e147925885a8c3833.jpg'
    },
    quantity: 5,
    title: 'Nintendo Switch 32GB, 1x Joycon, Neon Azul/Vermelho',
    price: 1200.00,
  }
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
