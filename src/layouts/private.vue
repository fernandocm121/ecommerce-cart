<template>
<q-layout
  class="m-x"
  view="lhr LpR lFr"
>
  <router-view v-slot="{ Component }">
    <suspense>
      <template #fallback>
        | Carregando...
      </template>
      <template #default>
        <q-page-container>
          <component :is="Component" />
        </q-page-container>
      </template>
    </suspense>
  </router-view>
</q-layout>
</template>
