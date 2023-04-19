<script setup>
const { cartCounter } = useCart()
</script>

<template>
<div
  un-bg-primary
  un-flex
  un-p-md
  un-w-full
  un-justify-center
>
  <div un-w="80%">
    <div
      un-justify-between
      un-w-full
      un-flex
    >
      <RouterLink to="/">
        <div un-text="xl white">
            <QImg
              fit="contain"
              src="https://static.nike.com.br/v10-0-0/images/brands/logo.svg"
              width="60px"
              height="60px"
              un-max-w="md"
            >
            </QImg>
          NIKE STORE
        </div>
      </RouterLink>
      <div 
        un-flex
        un-items-center
        un-space-x-md
      >
        <div
          un-flex
          un-items-center
        >
          <div un-text="xl white">Minha Conta</div>
          <q-icon
            class="i-mdi-chevron-down"
            color="white"
            size="xs"
          />
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
    </div>
  </div>
</div>
</template>