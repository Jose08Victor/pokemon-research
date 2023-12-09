import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "quest-react-avancado",
  build: {
    assetsInlineLimit: '500'
  }
})
