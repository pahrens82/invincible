import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  homepage: "/invincible/#",
  base: "./",
  version: "1.0.0",
})
