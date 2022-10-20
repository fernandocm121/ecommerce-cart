<script setup>
const { cartCounter } = useCart()
</script>

<template>
<div
  un-bg-dark
  un-flex
  un-justify-between
  un-p-md
  un-w-col-8
>
  <div un-text="xl white">
    Game Store
  </div>
  <div un-pos-relative>
    <div
      un-flex
      un-justify-end
    >
      <span
        un-h="15px"
        un-rounded="50%"
        un-w="15px"
        un-bg-red
        un-flex
        un-items-center
        un-justify-center
        un-text-white
        un-pos-absolute
        un-z-1
      >
        {{ cartCounter }}
      </span>
    </div>
    <q-icon
      class="i-mdi-cart"
      color="white"
      size="md"
    />
  </div>
</div>
</template>