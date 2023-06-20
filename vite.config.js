import { defineConfig } from 'vite';
import packageJson from './package.json';

const { entry, output } = packageJson.config.js;

export default defineConfig(({ mode }) => {
  return {
    build: {
      rollupOptions: {
        input: entry,
        output: {
          dir: output,
          entryFileNames: '[name].js',
        },
      },
      sourcemap: mode === 'development',
      minify: mode === 'production',
    },
  };
});
