import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3000,
        host: true,
    },
    envDir: '../', // Read .env from parent directory (root)
    envPrefix: 'VITE_',
})
