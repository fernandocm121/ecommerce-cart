/* eslint-disable key-spacing */
/* eslint-disable no-multi-spaces */

import { Notify, Quasar, Ripple } from 'quasar'
import iconSet from 'quasar/icon-set/mdi-v6'

import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/material-icons/material-icons.css'

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
        primary: '#8B634B',
        accent: '#AD795B',
        secondary: '#000000',

        dark: '#464646',

        positive: '#71AF71',
        negative: '#AC2222',
        info: '#3ddfff',
        warning: '#ffbe0d',

        details: '#989898',
        separator: '#E0E0E0',
        borders: '#00000014',
        whatsapp: '#1BD741',
      },
    },
  })
}
