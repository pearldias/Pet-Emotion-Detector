import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      "a9680e10-5f9b-4e0d-8d7c-daf1566c2fbc-00-2xjrwocjhd2x4.kirk.replit.dev"
    ],
    proxy: {
      '/analyze': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
