import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    'slick-carousel': 'node_modules/slick-carousel/slick',
  },
  server: {
    port: 3000
  }
})
