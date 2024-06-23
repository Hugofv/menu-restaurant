import { sentryVitePlugin } from '@sentry/vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'

export default async ({ mode }) => {
  process.env = { ...loadEnv(mode, process.cwd()), ...process.env }

  const plugins = [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    splitVendorChunkPlugin()
  ]

  return defineConfig({
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
    plugins
  })
}
