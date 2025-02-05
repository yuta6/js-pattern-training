import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/global.scss";`, // グローバルSCSSの自動インポート
      },
    },
  },
  build: {
    outDir: 'build', // ビルド後の出力先
  },
});
