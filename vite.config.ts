import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(path.resolve(__dirname), "src"),
      "@utils": path.resolve(path.resolve(__dirname), "src/utils"),
    },
  },
  plugins: [react()]
})
