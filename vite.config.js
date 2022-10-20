import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

// import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { quasar as Quasar, transformAssetUrls } from '@quasar/vite-plugin'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname),
        '~/': `${ resolve(__dirname, 'src') }/`,
      },
    },

    plugins: [
      Vue({
        include: [ /\.vue$/ ],
        template: { transformAssetUrls },
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: [ 'vue' ],
        dirs: 'src/pages',
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        defaultLayout: 'public',
        layoutsDirs: 'src/layouts',
      }),

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
        resolvers: [
          IconsResolver(),
        ],
      }),

      // https://quasar.dev/start/vite-plugin
      // Quasar({
      //   autoImportComponentCase: 'combined',
      //   sassVariables: 'src/styles/quasar/variables.sass',
      // }),

      // https://github.com/antfu/unocss
      Unocss(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        // global imports to register
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          'vue/macros',
          'quasar',
          '@vueuse/head',
          '@vueuse/core',
        ],

        // Auto import for all module exports under directories
        dirs: [ 'src/composables/**' ],

        // Auto import inside Vue template
        // see https://github.com/unjs/unimport/pull/15
        vueTemplate: true,

        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: true,
        },

        dts: 'src/auto-imports.d.ts',
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        compiler: 'vue3',
        autoInstall: true,
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
    ],

    server: {
      port: 3090,
      host: true,

      proxy: {
        '/graphql': {
          target: env.VITE_SRP_GRAPHQL_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },

    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      exclude: [ 'vuedraggable' ],
    },
  }
})
