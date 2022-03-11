<script setup>
const products = [
  {
    imgProps: {
      src: 'https://a-static.mlcdn.com.br/618x463/controle-para-ps5-sem-fio-dualsense-sony-midnight-black/magazineluiza/230019300/89af4b55edae3af2e94df48962336e1f.jpg',
    },
    quantity: 12,
    title: 'Controle para PS5 sem Fio DualSense Sony',
  },
  {
    imgProps: {
      src: 'https://a-static.mlcdn.com.br/618x463/xbox-series-s-2020-nova-geracao-512gb-ssd-1-controle-branco-microsoft-lancamento/magazineluiza/043083000/32fe1e8fc7e51793a5ec7f89abd77a9d.jpg'
    },
    quantity: 8,
    title: 'Xbox Series S 2020 Nova Geração 512GB SSD',
  },
  {
    imgProps: {
      src: 'https://a-static.mlcdn.com.br/618x463/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba1/kabum/135586/114e88d970f7af6e147925885a8c3833.jpg'
    },
    quantity: 5,
    title: 'Nintendo Switch 32GB, 1x Joycon, Neon Azul/Vermelho',
  }
]
</script>

<template>
<div 
  un-flex
  un-justify-center
>
  <div 
    un-grid="~ cols-3 gap-4"
    un-mt-lg
    un-w-col-8
  >
    <product-item 
      v-for="(product, index) in products"
      :img-props="product.imgProps"
      :key="`product-${index}`"
      :quantity="product.quantity"
      :title="product.title"
      un-flex="~ col"
      un-items-center
      un-p-md
    />
  </div>
</div>
</template>
