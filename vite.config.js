/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import path from Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Assuming your TypeScript files are located in the src directory
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
});
