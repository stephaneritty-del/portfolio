import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  ssr: {
    // Bundle lucide-react into the build-time render so Node doesn't need
    // to resolve its ESM/CJS entry points on its own.
    noExternal: ['lucide-react']
  }
})
