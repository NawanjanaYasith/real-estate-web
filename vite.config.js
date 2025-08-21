import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', '*.png', '*.svg'],
    manifest: {
      name: 'Real State App',
      short_name: 'App',
      description: 'App for Real State',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/realt_state_small.png', // ඔබේ icon එකේ path එක
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/real_state_latge.png', // ඔබේ icon එකේ path එක
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),
  ],
})
