import { quasar as Quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

// import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${ resolve(__dirname, 'src') }/`,
    },
  },

  plugins: [
    Vue({
      include: [ /\.vue$/ ],
      template: { transformAssetUrls },
    }),

    // https://quasar.dev/start/vite-plugin
    Quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: 'src/styles/quasar/variables.sass',
    }),

    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // relative paths to the directory to search for components
      dirs: [
        'src/components',
      ],
      // allow auto load markdown components
      extensions: [ 'vue' ],
      // search for subdirectories
      deep: true,
      dts: 'src/components.d.ts',
      // allow auto import and register components used in markdown
      include: [ /\.vue$/, /\.vue\?vue/ ],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: 'src/auto-imports-srp.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import-srp.json',
        globalsPropValue: true,
      },
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'quasar',
      ],
    }),
  
    // https://github.com/antfu/unplugin-vue-components
    // Components({
    //   // relative paths to the directory to search for components
    //   dirs: [
    //     'src/components',
    //   ],
    //   // allow auto load markdown components
    //   extensions: [ 'vue' ],
    //   // search for subdirectories
    //   deep: true,
    //   dts: 'src/components-srp.d.ts',
    //   // allow auto import and register components used in markdown
    //   include: [ /\.vue$/, /\.vue\?vue/ ],
    //   resolvers: [
    //     IconsResolver(),
    //   ],
    // }),
  ]  
})
