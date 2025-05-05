import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
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
					  return 'vendor'; // 所有第三方依赖统一打成 vendor.js
					}
				},
        assetFileNames() {
          return `assets/[ext]/[name]-[hash][extname]`
        },
      }
    }
  }
})
