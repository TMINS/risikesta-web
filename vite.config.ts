import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import postcssPxToViewport from 'postcss-px-to-viewport'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({

    imports: ['vue'],

    dts: 'src/auto-import.d.ts',

  })],
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.0.1:2021",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },

    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 1920   //---基于1200宽度为100vw
        })
      ]
    }
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },

})
