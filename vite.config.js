import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // changes name of dist folder to build folder
  build: {
    outDir: 'build',
  }
})
