import path from 'path'
import { defineConfig } from 'vite'
import { pascalCase } from 'change-case'
import vitePluginDts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: pascalCase(pkg.name.split('/').pop()),
            fileName: 'lib',
            formats: ['cjs', 'es', 'umd'],
        },
        outDir: 'dist',
        sourcemap: true,
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vitePluginDts({
            insertTypesEntry: true,
        }),
    ],
})
