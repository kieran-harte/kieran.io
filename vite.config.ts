import { defineConfig } from 'vite'
import litCss from 'vite-plugin-lit-css'

export default defineConfig({
  plugins: [
    litCss({
      include: '**/*.scss', // Process all .scss files
      exclude: '', // Exclude any global styles if necessary
    }),
  ],
})
