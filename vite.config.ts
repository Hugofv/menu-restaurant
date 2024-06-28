import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'

export default async ({ mode }: { mode: string }) => {
  process.env = { ...loadEnv(mode, process.cwd()), ...process.env }

  const plugins = [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    splitVendorChunkPlugin()
  ]

  // @ts-ignore
  return defineConfig({
    // @ts-ignore
    server: { port: process.env.VITE_PUBLIC_PORT },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        './runtimeConfig': './runtimeConfig.browser'
      }
    },
    build: {
      sourcemap: true
    },
    plugins,
    test: {
      environment: 'jsdom',
      globals: true,
      watch: false,
      testTimeout: 2000,
      clearMocks: true,
      maxConcurrency: 50
    }
  })
}
