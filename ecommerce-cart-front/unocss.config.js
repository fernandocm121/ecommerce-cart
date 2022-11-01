import fs from 'fs'

import { defineConfig } from 'unocss'
import { createGenerator } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'

import presetBase from './src/unocss'

const config = defineConfig({
  presets: [
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
      warn: true,
    }),
    presetWind(),
    presetBase(),
  ],
})

function parseUno(key, value) {
  if (value instanceof RegExp) {
    return value.toString()
  }
  return value
}

function formatName(name) {
  const project = name.split('-')[ 2 ]

  if (!project && name === '@unocss/preset-wind') {
    return 'windi'
  }

  return project
}

function generateUnoDocsJson({ userConfig }) {
  const presets = userConfig.presets.reduce((acc, { name, theme }) => {
    acc[ formatName(name) ] = theme

    return acc
  }, {})

  fs.writeFileSync('unocss.theme.json',
    JSON.stringify(presets),
  )
}

// Para debugar as configurações e temas
const uno = createGenerator(config)
fs.writeFileSync('unocss.generated.json', JSON.stringify(uno, parseUno, 2))

// fs.writeFileSync('unocss.preset.json', JSON.stringify(presetMultiplier(), parseUno, 2))

generateUnoDocsJson(uno)

export default config
