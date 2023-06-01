/*
 * @Author: zhouyang
 * @Date: 2023-05-15 10:31:29
 * @LastEditors: zhouyang
 * @LastEditTime: 2023-06-01 13:57:01
 * @FilePath: \electron-template\vue-app\vite.config.ts
 * @Desc: 描述
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: '../electron-app',
    emptyOutDir: false,
  },
  plugins: [
    VueDevTools(),
    vue(),
  ],
})
