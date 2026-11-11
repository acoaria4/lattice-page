import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        picker: fileURLToPath(new URL("./index.html", import.meta.url)),
        v1: fileURLToPath(new URL("./v1/index.html", import.meta.url)),
        v2: fileURLToPath(new URL("./v2/index.html", import.meta.url)),
        compare: fileURLToPath(new URL("./compare/index.html", import.meta.url)),
        study: fileURLToPath(new URL("./study/index.html", import.meta.url)),
        indexReview: fileURLToPath(new URL("./index-review/index.html", import.meta.url)),
      },
      output: {
        manualChunks(id) {
          if (id.includes("/three/") && id.endsWith("/three.core.js")) return "three-core";
        },
      },
    },
  },
});
