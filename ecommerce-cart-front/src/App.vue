<script setup>
// Insere no Quasar regra para usar o icones do preset de icones do UnoCSS
const $q = useQuasar()

$q.iconMapFn = iconName => iconName.startsWith('i-') ? { cls: iconName } : undefined

// Define título da página configurado nas rotas
const route = useRoute()
const title = ref()
watch(
  () => route.meta,
  (meta) => {
    title.value = meta.title
  },
)
useHead({
  title: computed(() => `Multiplier${title.value ? ` - ${title.value}` : ''}`),
})
</script>

<template>
<router-view></router-view>
</template>