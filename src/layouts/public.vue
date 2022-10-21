<template>
<q-layout
  class="ecommerce-cart"
  view="lhr LpR lFr"
  un-bg="#E9EAE9"
>
  <router-view v-slot="{ Component }">
    <div 
      un-flex
      un-justify-center
    >
      <Header />
    </div>
    <q-page-container>
      <component :is="Component" />
    </q-page-container>
  </router-view>
</q-layout>

</template>
