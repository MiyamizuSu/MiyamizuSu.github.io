import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [vue(),tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build:{
    rollupOptions:{
      output:{
        manualChunks: (id) => {
					if (id.includes('node_modules')) {
					  return 'vendor'; 
					}
				},
        assetFileNames() {
          return `assets/[ext]/[name]-[hash][extname]`
        },
      }
    }
  }
})
