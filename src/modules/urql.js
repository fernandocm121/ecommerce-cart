import urql, { defaultExchanges } from '@urql/vue'

// import { cacheExchange } from '@urql/exchange-graphcache'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'

// import { devtoolsExchange } from '@urql/devtools'

export const install = (app) => {
  const url = '/graphql'
  const tenant = window.location.hostname.split('.')[ 0 ]
  const headers = {
    ...((import.meta.env.VITE_SRP_GRAPHQL_TOKEN)
      ? { Authorization: `Bearer ${ import.meta.env.VITE_SRP_GRAPHQL_TOKEN }` }
      : {}),
    'x-tenant': tenant,
  }

  app.use(urql, {
    url,
    fetchOptions: () => ({
      headers,
    }),
    exchanges: [
      // devtoolsExchange,
      multipartFetchExchange,
      // cacheExchange({}),
      ...defaultExchanges,
    ],
  })
}
