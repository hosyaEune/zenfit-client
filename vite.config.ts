import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { compression } from "vite-plugin-compression2";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    compression({
      algorithm: "gzip",
      deleteOriginalAssets: false,
    }),
    compression({
      algorithm: "brotliCompress",
      deleteOriginalAssets: false,
    }),
    VitePWA({
      registerType: "autoUpdate",
      base: "/",
      devOptions: {
        enabled: true,
        type: "module",
      },
      srcDir: "src",
      filename: "sw.ts",
      workbox: {
        swDest: "client/sw.js",
      },
      strategies: "injectManifest",
      manifest: {
        name: "zenFit",
        short_name: "zenFit",
        icons: [
          {
            src: "/assets/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
      },
    }),
  ],
  resolve: { alias: { "@": "/src" } },
});
