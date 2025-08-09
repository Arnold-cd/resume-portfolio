import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/resume-portfolio/',
  resolve: {
    // Add extensions that Vite will try to resolve automatically
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})