import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://zacarywebb.github.io/JimFazioGolf/
export default defineConfig({
  base: '/JimFazioGolf/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          vendor: ['react', 'react-dom', 'react-router-dom', 'gsap', '@gsap/react'],
        },
      },
    },
  },
})
