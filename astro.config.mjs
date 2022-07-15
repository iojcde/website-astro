import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import { minify } from 'html-minifier-terser'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
})
