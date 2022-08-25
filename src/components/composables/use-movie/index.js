import { useQuery } from '@urql/vue'

export const useStatesData = ref([])
export const useStatesLoading = ref(true)

/* Query para obter os estados */
export const useStatesQuery = options => useQuery({
  ...options,
  query: `
    {
      estados(first: 99999, page: 1) {
        data {
          id
          nome
          sigla
        }
      }
    }
  `,
})

/** Composable que retorna os dados da query */
export default (options) => {
  const useStatesData = useStatesQuery(options)
  console.log('useStatesData :>> ', useStatesData);

  // watch(
  //   () => data?.value?.estados?.data,
  //   async(data) => {
  //     useStatesData.value = data
  //     useStatesLoading.value = false
  //   },
  // )

  return {
    data: useStatesData,
  }
}
