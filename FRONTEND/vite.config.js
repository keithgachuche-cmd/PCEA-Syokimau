import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Send /api calls to the FastAPI backend (run: uvicorn main:app --port 8000)
  server: { proxy: { '/api': 'http://localhost:8000' } },
})