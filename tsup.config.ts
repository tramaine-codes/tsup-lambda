import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['src/lambda.ts'],
  external: ['oracledb'],
  sourcemap: true,
  splitting: true,
  treeshake: true,
  watch: false,
});
