import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resume-portfolio/',
  resolve: {
    // Add extensions that Vite will try to resolve automatically
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})