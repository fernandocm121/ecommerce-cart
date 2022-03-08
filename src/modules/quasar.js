/* eslint-disable key-spacing */
/* eslint-disable no-multi-spaces */

import { Notify, Quasar, Ripple } from 'quasar'
import iconSet from 'quasar/icon-set/svg-mdi-v6'
import lang from 'quasar/lang/pt-BR.js'

export const install = (app) => {
  app.use(Quasar, {
    iconSet,
    lang,
    plugins: {
      Notify,
    },
    directives: { Ripple },
    config: {
      notify: {
        position: 'top',
        timeout: 5000,
      },
      brand: {
        'primary'     : 'var(--color-primary)',
        'secondary'   : 'var(--color-secondary)',
        'accent'      : 'var(--color-accent)',

        'dark'        : 'var(--color-dark)',
        'dark-page'   : 'var(--color-dark-page)',

        'positive'    : 'var(--color-positive)',
        'negative'    : 'var(--color-negative)',
        'info'        : 'var(--color-info)',
        'warning'     : 'var(--color-warning)',
      },
    },
  })
}
