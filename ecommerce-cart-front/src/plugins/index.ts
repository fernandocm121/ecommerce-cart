import type { App } from 'vue'

import type { UserModule } from '../base-app'

const PLUGINS = import.meta.globEager<{ install: UserModule }>('./**/*.{js,ts}', {
  exclude: ['./index.{js,ts}']
});

export const applyPlugins = (app: App) => {
  return Object.values(PLUGINS).map(i => i.install?.(app))
}
