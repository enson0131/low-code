import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactCssModule from "vite-plugin-react-css-modules";
import genericNames from "generic-names";

const GENERATE_PATH = "[path]___[name]__[local]___[hash:base64:5]";
const generateIdentName = genericNames(GENERATE_PATH, {
  // css-loader 新版本的 hash 和 babel-plugin-react-css-modules 生成的hash不一样, 因此通过 generic-names 矫正
  context: process.cwd(),
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactCssModule({
      exclude: "node_modules",
      generateScopedName: genericNames(GENERATE_PATH),
      autoResolveMultipleImports: true, // 如果 styleName 只在其中一个中，则允许多个匿名导入
      filetypes: {
        ".less": {
          syntax: "postcss-less",
        },
      },
    }),
  ],
  css: {
    modules: {
      globalModulePaths: [/$global.less/, /$overrides.less/, /node_modules/g],
      generateScopedName(name, filename) {
        return generateIdentName(name, filename);
      },
    },
  },
});
