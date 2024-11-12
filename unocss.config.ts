import presetUno from '@unocss/preset-uno'
import autoUno from 'autouno'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    autoUno([
      'box-shadow:none',
    ]),
  ],
})
